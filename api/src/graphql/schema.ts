import { queryType, makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world' });
  },
});

export const schema = makeSchema({
  types: [Query],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: join(process.cwd(), 'src/__generated/nexus-typegen.ts'),
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
