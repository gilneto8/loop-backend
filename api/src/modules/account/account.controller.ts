import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { AccountService } from './account.service';
import getAccountDto from './dtos/getAccount.dto';
import { AccountEntity } from '../../internals/decorators/account-entity';
import updateAccountDto from './dtos/updateAccount.dto';
import { RemovePasswordInterceptor } from '../../internals/interceptors/remove-password';
import { TripService } from '../trip/trip.service';

@Controller('accounts')
export class AccountController {
  constructor(
    private accountService: AccountService,
    private tripService: TripService,
  ) {}

  @Get(':id')
  @UseInterceptors(RemovePasswordInterceptor)
  getAccount(@Param('id', new ParseIntPipe()) id: getAccountDto['id']) {
    return this.accountService.get(id);
  }

  @Get(':id/trips')
  getAccountTrips(
    @Param('id', new ParseIntPipe()) id: getAccountDto['id'],
    @Request() req: { body: { includeDeleted: boolean } },
  ) {
    return this.tripService.getAll(id, req.body.includeDeleted);
  }

  @Put()
  @UseInterceptors(RemovePasswordInterceptor)
  updateAccount(
    @AccountEntity() account: getAccountDto,
    @Request() req: { body: updateAccountDto },
  ) {
    return this.accountService.update(account.id, req.body);
  }
}
