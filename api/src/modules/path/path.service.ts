import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../internals/prisma/prisma.service';
import createPathDto from './dtos/createPath.dto';
import getPathDto from './dtos/getPath.dto';
import updatePathDto from './dtos/updatePath.dto';
import deletePathDto from './dtos/deletePath.dto';
import { ErrorMessages } from '../../utils/enums/error-messages';
import { PostgresErrorCodes } from '../../utils/enums/postgres-error-codes';
import moment from 'moment';

@Injectable()
export class PathService {
  constructor(private prisma: PrismaService) {}

  async create(params: createPathDto) {
    try {
      return this.prisma.path.create({ data: { ...params } });
    } catch (err) {
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: getPathDto['id'], params: updatePathDto) {
    try {
      await this.prisma.path.findUnique({ where: { id } });
      return await this.prisma.path.update({
        data: params,
        where: { id },
      });
    } catch (err) {
      if (err?.code === PostgresErrorCodes.RecordNotFound) {
        throw new HttpException(
          ErrorMessages.WAYPOINT_ID_NOT_FOUND,
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(params: deletePathDto) {
    const path = await this.prisma.path.findUnique({
      where: { ...params },
    });
    if (!path)
      throw new HttpException(
        ErrorMessages.WAYPOINT_ID_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    try {
      if (path.deletedAt === null)
        return this.prisma.path.update({
          where: { id: path.id },
          data: { deletedAt: moment().toDate() },
        });
      else return this.prisma.path.delete({ where: { ...params } });
    } catch (err) {
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
