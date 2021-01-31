import { queryType, makeSchema, objectType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';
import { createContext } from './context';

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world' });
    t.string('goodbye', { resolve: () => 'goodbye world' });
  },
});

// TODO with don't the types get recognized? something wrong with typegen output destination?

export const schema = makeSchema({
  types: [Query],
  plugins: [
    nexusPrisma({ experimentalCRUD: true, prismaClient: createContext }),
  ],
  outputs: {
    typegen: join(process.cwd(), '__generated/nexus-typegen.d.ts'),
    schema: join(process.cwd(), '__generated/schema.gql'),
  },
  contextType: {
    module: join(process.cwd(), 'src/graphql/context.ts'),
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
