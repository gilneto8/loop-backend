import { Module } from '@nestjs/common';
import { WaypointService } from './waypoint.service';
import { WaypointController } from './waypoint.controller';
import { PrismaService } from '../../internals/prisma/prisma.service';

@Module({
  providers: [WaypointService, PrismaService],
  controllers: [WaypointController],
})
export class WaypointModule {}
