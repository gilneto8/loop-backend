import { queryType, makeSchema, objectType, mutationType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';

const Account = objectType<'Account'>({
  name: 'Account',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.details();
    t.model.password();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.trips({
      type: 'Trip',
      pagination: true,
      filtering: { name: true, createdAt: true },
    });
  },
});

const Trip = objectType<'Trip'>({
  name: 'Trip',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
  },
});

const Query = queryType({
  definition(t) {
    t.crud.account();
    t.crud.accounts({
      filtering: true,
      ordering: true,
    });
    t.crud.trip();
    t.crud.trips({
      pagination: true,
      ordering: true,
      filtering: {
        name: true,
        createdAt: true,
        ownerId: true,
      },
    });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneAccount();
    t.crud.updateOneAccount();
    t.crud.deleteOneAccount();
    t.crud.createOneTrip();
    t.crud.updateOneTrip();
    t.crud.deleteOneTrip();
  },
});

export const schema = makeSchema({
  types: [Account, Trip, Query, Mutation],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: join(
      process.cwd(),
      'src/internals/nexus/__generated/nexus-typegen.d.ts',
    ),
    schema: join(process.cwd(), 'src/internals/nexus/__generated/schema.gql'),
  },
  contextType: {
    module: join(process.cwd(), 'src/internals/prisma/prisma.context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  shouldExitAfterGenerateArtifacts: false,
});
