import { queryType, makeSchema, objectType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';
import { createContext } from './context';
import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world' });
    t.string('goodbye', { resolve: () => 'goodbye world' });
  },
});

/*const obj = objectType<'Trip'>({
  name: 'Trip',
  definition(t: ObjectDefinitionBlock<'Trip'>) {
    t.model.id();
    t.model.destination();
  },
});*/

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
