import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../internals/prisma/prisma.service';
import { ErrorMessages } from '../../utils/enums/error-messages';
import createTripDto from './dtos/createTrip.dto';
import { PostgresErrorCodes } from '../../utils/enums/postgres-error-codes';
import updateTripDto from './dtos/updateTrip.dto';
import deleteTripDto from './dtos/deleteTrip.dto';
import getAccountDto from '../account/dtos/getAccount.dto';
import moment from 'moment';
import getTripDto, { GetOpts } from './dtos/getTrip.dto';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async get(id: getTripDto['id'], opts?: GetOpts) {
    const trip = await this.prisma.trip.findUnique({
      where: { id },
      include: {
        waypoints: (() =>
          opts?.includeDeletedWaypoints
            ? {}
            : { where: { deletedAt: null } })(),
        paths: (() =>
          opts?.includeDeletedPaths ? {} : { where: { deletedAt: null } })(),
      },
    });
    if (!trip)
      throw new HttpException(
        ErrorMessages.TRIP_ID_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    return trip;
  }

  async getAll(ownerId: getAccountDto['id'], opts?: GetOpts) {
    const trips = this.prisma.trip.findMany({
      where: {
        ownerId,
        ...(() => (opts?.includeDeletedTrips ? {} : { deletedAt: null }))(),
      },
      include: {
        waypoints: (() =>
          opts?.includeDeletedWaypoints
            ? {}
            : { where: { deletedAt: null } })(),
        paths: (() =>
          opts?.includeDeletedPaths ? {} : { where: { deletedAt: null } })(),
      },
    });
    if (!trips)
      throw new HttpException(
        ErrorMessages.ACCOUNT_ID_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    return trips;
  }

  create(ownerId: getAccountDto['id'], params: createTripDto) {
    if (!ownerId)
      throw new HttpException(
        ErrorMessages.ACCOUNT_ID_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    try {
      return this.prisma.trip.create({ data: { ownerId, ...params } });
    } catch (err) {
      if (err?.code === PostgresErrorCodes.UniqueViolation) {
        throw new HttpException(
          ErrorMessages.TRIP_ALREADY_EXISTS,
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: getTripDto['id'], params: updateTripDto) {
    try {
      await this.prisma.trip.findUnique({ where: { id } });
      return await this.prisma.trip.update({
        data: params,
        where: { id },
      });
    } catch (err) {
      if (err?.code === PostgresErrorCodes.RecordNotFound) {
        throw new HttpException(
          ErrorMessages.TRIP_ID_NOT_FOUND,
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(params: deleteTripDto) {
    const trip = await this.prisma.trip.findUnique({ where: { ...params } });
    if (!trip)
      throw new HttpException(
        ErrorMessages.TRIP_ID_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    try {
      if (trip.deletedAt === null)
        return this.prisma.trip.update({
          where: { id: trip.id },
          data: { deletedAt: moment().toDate() },
        });
      else return this.prisma.trip.delete({ where: { ...params } });
    } catch (err) {
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
