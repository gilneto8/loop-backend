import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { createContext } from '../prisma/prisma.context';
import { schema } from '../nexus/schema';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: createContext,
      schema,
      playground: true,
      debug: true,
      tracing: true,
    }),
  ],
})
export class GQLModule {}
