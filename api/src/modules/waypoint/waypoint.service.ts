import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../internals/prisma/prisma.service';
import createWaypointDto from './dtos/createWaypoint.dto';
import getWaypointDto from './dtos/getWaypoint.dto';
import updateWaypointDto from './dtos/updateWaypoint.dto';
import deleteWaypointDto, { DeleteOpts } from './dtos/deleteWaypoint.dto';
import { ErrorMessages } from '../../utils/enums/error-messages';
import { PostgresErrorCodes } from '../../utils/enums/postgres-error-codes';
import moment from 'moment';

@Injectable()
export class WaypointService {
  constructor(private prisma: PrismaService) {}

  async create(params: createWaypointDto) {
    if (!params.tripId) throw new HttpException(ErrorMessages.TRIP_ID_NOT_FOUND, HttpStatus.NOT_FOUND);
    try {
      return this.prisma.waypoint.create({ data: { ...params } });
    } catch (err) {
      if (err?.code === PostgresErrorCodes.UniqueViolation) {
        throw new HttpException(ErrorMessages.TRIP_ALREADY_EXISTS, HttpStatus.CONFLICT);
      }
      throw new HttpException(ErrorMessages.UNKNOWN, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: getWaypointDto['id'], params: updateWaypointDto) {
    try {
      await this.prisma.waypoint.findUnique({ where: { id } });
      return await this.prisma.waypoint.update({
        data: params,
        where: { id },
      });
    } catch (err) {
      if (err?.code === PostgresErrorCodes.RecordNotFound) {
        throw new HttpException(ErrorMessages.WAYPOINT_ID_NOT_FOUND, HttpStatus.CONFLICT);
      }
      throw new HttpException(ErrorMessages.UNKNOWN, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(params: deleteWaypointDto, opts?: DeleteOpts) {
    const waypoint = await this.prisma.waypoint.findUnique({
      where: { ...params },
    });
    if (!waypoint) throw new HttpException(ErrorMessages.WAYPOINT_ID_NOT_FOUND, HttpStatus.NOT_FOUND);
    try {
      if (waypoint.deletedAt === null)
        return this.prisma.waypoint.update({
          where: { id: waypoint.id },
          data: { deletedAt: moment().toDate() },
        });
      else return this.prisma.waypoint.delete({ where: { ...params } });
    } catch (err) {
      throw new HttpException(ErrorMessages.UNKNOWN, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
