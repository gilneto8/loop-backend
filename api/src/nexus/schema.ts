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
  },
});

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world' });
    t.string('goodbye', { resolve: () => 'goodbye world' });
    t.crud.account();
    t.crud.accounts({
      filtering: true,
      ordering: true,
    });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneAccount();
    t.crud.updateOneAccount();
    t.crud.deleteOneAccount();
  },
});

export const schema = makeSchema({
  types: [Account, Query, Mutation],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: join(process.cwd(), 'src/nexus/__generated/nexus-typegen.d.ts'),
    schema: join(process.cwd(), 'src/nexus/__generated/schema.gql'),
  },
  contextType: {
    module: join(process.cwd(), 'src/nexus/context.ts'),
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
