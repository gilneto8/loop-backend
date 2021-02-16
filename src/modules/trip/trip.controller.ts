import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { TripService } from './trip.service';
import updateTripDto from './dtos/updateTrip.dto';
import getAccountDto from '../account/dtos/getAccount.dto';
import createTripDto from './dtos/createTrip.dto';
import getTripDto from './dtos/getTrip.dto';
import { AccountEntity } from '../../internals/decorators/account-entity';

@Controller('trips')
export class TripController {
  constructor(private tripService: TripService) {}

  @Get(':id')
  getTrip(@Param('id', new ParseIntPipe()) id: getTripDto['id']) {
    return this.tripService.get(id);
  }

  @Post()
  async createTrip(
    @AccountEntity() { id }: getAccountDto,
    @Request() req: { body: createTripDto },
  ) {
    return this.tripService.create(id, req.body);
  }

  @Put(':id')
  updateTrip(
    @Param('id', new ParseIntPipe()) id: getTripDto['id'],
    @Request() req: { body: updateTripDto },
  ) {
    return this.tripService.update(id, req.body);
  }

  @Delete(':id')
  deleteTrip(@Param('id', new ParseIntPipe()) id: getTripDto['id']) {
    return this.tripService.delete({ id });
  }
}
