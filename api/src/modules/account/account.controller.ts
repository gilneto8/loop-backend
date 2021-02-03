import { Controller, Get, Post, Query, Request } from '@nestjs/common';
import { AccountService } from './account.service';
import { TGetAccountParams, TCreate } from './account.types';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get('find')
  getAccount(@Query() params: TGetAccountParams) {
    return this.accountService.get(params);
  }

  @Post()
  createAccount(@Request() req: { body: TCreate }) {
    return this.accountService.create(req.body);
  }
}
