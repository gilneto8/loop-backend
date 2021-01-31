import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { createContext } from './nexus/context';
import { schema } from './nexus/schema';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: createContext,
      schema,
      playground: true,
      debug: true,
      tracing: true,
    }),
    /*HealthModule,*/
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
