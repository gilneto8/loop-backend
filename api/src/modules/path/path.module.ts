import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathController } from './path.controller';
import { PrismaService } from '../../internals/prisma/prisma.service';

@Module({
  providers: [PathService, PrismaService],
  controllers: [PathController],
})
export class PathModule {}
