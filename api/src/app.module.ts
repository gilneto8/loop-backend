import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { join } from 'path';
import { TripResolver } from './trip/trip.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      tracing: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [PrismaService, TripResolver],
})
export class AppModule {}
