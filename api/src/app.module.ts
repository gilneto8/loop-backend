import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { createContext } from './internals/prisma/prisma.context';
import { schema } from './internals/nexus/schema';
import { HealthModule } from './internals/health/health.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: createContext,
      schema,
      playground: true,
      debug: true,
      tracing: true,
    }),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
