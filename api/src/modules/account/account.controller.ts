import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Request,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { TCreateAccountParams, TGetAccountParams } from './account.types';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get(':id')
  getAccount(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.accountService.get(id);
  }

  @Post()
  createAccount(@Request() req: { body: TCreateAccountParams }) {
    return this.accountService.create(req.body);
  }
}
