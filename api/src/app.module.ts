import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
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
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
