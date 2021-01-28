import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { join } from 'path';
import { TripResolver } from './trip/trip.resolver';
import { AccountResolver } from './account/account.resolver';
import { createContext } from './graphql/context';
import { schema } from './graphql/schema';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: createContext,
      schema,
      playground: true,
      debug: true,
      tracing: true,
      // autoSchemaFile: join(process.cwd(), 'src/__generated/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [PrismaService, TripResolver, AccountResolver],
})
export class AppModule {}
