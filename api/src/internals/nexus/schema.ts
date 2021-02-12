import { queryType, makeSchema, objectType, mutationType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';

/*
 * 1st: define objectType
 * 2nd: add objectType to schema types
 * (restart)
 * 3rd: add its relations to other objectTypes
 * (restart)
 * 4th: define its queries and mutations
 * (restart)
 */

const Account = objectType<'Account'>({
  name: 'Account',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.password();
    t.model.email();
    t.model.name();
    t.model.details();
    t.model.trips({
      pagination: true,
      filtering: { name: true, createdAt: true },
      ordering: { createdAt: true, updatedAt: true, deletedAt: true },
    });
  },
});

const Trip = objectType<'Trip'>({
  name: 'Trip',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.model.name();
    t.model.description();
    t.model.waypoints({
      pagination: true,
      filtering: { name: true, createdAt: true },
      ordering: { createdAt: true, updatedAt: true, deletedAt: true },
    });
    t.model.paths({
      pagination: true,
      filtering: { name: true, createdAt: true },
      ordering: { createdAt: true, updatedAt: true, deletedAt: true },
    });
    t.model.owner();
    t.model.ownerId();
  },
});

const Waypoint = objectType<'Waypoint'>({
  name: 'Waypoint',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.model.name();
    t.model.description();
    t.model.type();
    t.model.to();
    t.model.from();
    t.model.trip();
    t.model.tripId();
    t.model.altitude();
    t.model.latitude();
    t.model.longitude();
  },
});

const Path = objectType<'Path'>({
  name: 'Path',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.model.name();
    t.model.description();
    t.model.type();
    t.model.trip();
    t.model.tripId();
    t.model.to();
    t.model.toId();
    t.model.from();
    t.model.fromId();
  },
});

const Query = queryType({
  definition(t) {
    t.crud.account();
    t.crud.accounts({
      pagination: true,
      filtering: true,
      ordering: true,
    });
    t.crud.trip();
    t.crud.trips({
      pagination: true,
      ordering: true,
      filtering: true,
    });
    t.crud.path();
    t.crud.paths({
      pagination: true,
      ordering: true,
      filtering: true,
    });
    t.crud.waypoint();
    t.crud.waypoints({
      pagination: true,
      ordering: true,
      filtering: true,
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
    t.crud.createOnePath();
    t.crud.updateOnePath();
    t.crud.deleteOnePath();
    t.crud.createOneWaypoint();
    t.crud.updateOneWaypoint();
    t.crud.deleteOneWaypoint();
  },
});

export const schema = makeSchema({
  types: [Account, Trip, Waypoint, Path, Query, Mutation],
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
