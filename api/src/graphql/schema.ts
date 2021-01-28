import { objectType, queryType, mutationType, makeSchema } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';
import { NexusPlugin } from '@nexus/schema/dist/plugin';

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world' });
  },
});

export const schema = makeSchema({
  types: [Query],
  plugins: [
    (nexusPrisma({ experimentalCRUD: true }) as unknown) as NexusPlugin,
  ],
  outputs: {
    typegen: join(process.cwd(), 'src/__generated/nexus-typegen.ts'),
    schema: join(process.cwd(), 'src/__generated/schema.gql'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: join(process.cwd(), 'src/graphql/context.ts'),
        alias: 'Context',
      },
    ],
  },
});
