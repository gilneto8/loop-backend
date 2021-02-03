import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { createContext } from './internals/prisma/prisma.context';
import { schema } from './internals/nexus/schema';
import { HealthModule } from './internals/health/health.module';
import { AuthModule } from './internals/auth/auth.module';
import { AppController } from './app.controller';
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
    AuthModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
