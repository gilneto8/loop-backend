import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { createContext } from './nexus/context';
import { schema } from './nexus/schema';

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
  controllers: [],
  providers: [],
})
export class AppModule {}
