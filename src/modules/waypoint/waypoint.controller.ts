import {
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { WaypointService } from './waypoint.service';
import createWaypointDto from './dtos/createWaypoint.dto';
import updateWaypointDto from './dtos/updateWaypoint.dto';
import getWaypointDto from './dtos/getWaypoint.dto';

@Controller('waypoints')
export class WaypointController {
  constructor(private waypointService: WaypointService) {}

  @Post()
  async createWaypoint(@Request() req: { body: createWaypointDto }) {
    return this.waypointService.create(req.body);
  }

  @Put(':id')
  async updateWaypoint(
    @Param('id', new ParseIntPipe()) id: getWaypointDto['id'],
    @Request() req: { body: updateWaypointDto },
  ) {
    return this.waypointService.update(id, req.body);
  }

  @Delete(':id')
  async deleteWaypoint(
    @Param('id', new ParseIntPipe()) id: getWaypointDto['id'],
  ) {
    return this.waypointService.delete({ id });
  }
}
