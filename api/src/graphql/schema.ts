import { queryType, makeSchema, objectType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';
import { createContext } from './context';
import NexusGenCustomOutputProperties from '../__generated/nexus-typegen';
import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';

const Query = queryType({
  definition(t: ObjectDefinitionBlock<'Query'>) {
    t.string('hello', { resolve: () => 'hello world' });
    t.string('goodbye', { resolve: () => 'goodbye world' });
  },
});

export const schema = makeSchema({
  types: [Query],
  plugins: [
    nexusPrisma({ experimentalCRUD: true, prismaClient: createContext }),
  ],
  outputs: {
    typegen: join(process.cwd(), 'src/__generated/nexus-typegen.d.ts'),
    schema: join(process.cwd(), 'src/__generated/schema.gql'),
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
