import { Module } from '@nestjs/common';
import { WaypointService } from './waypoint.service';
import { WaypointController } from './waypoint.controller';

@Module({
  providers: [WaypointService],
  controllers: [WaypointController]
})
export class WaypointModule {}
