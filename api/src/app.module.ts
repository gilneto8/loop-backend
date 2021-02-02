import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { createContext } from './nexus/context';
import { schema } from './nexus/schema';
import { HealthModule } from './health/health.module';
import { AccountModule } from './account/account.module';

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
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
