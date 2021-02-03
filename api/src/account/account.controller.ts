import { Controller, Get, Param, Post, Request } from '@nestjs/common';
import { AccountService } from './account.service';
import { TCreate } from './account.types';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get(':id')
  getAccount(@Param('id') id: string) {
    return this.accountService.get({ id: +id });
  }

  @Post()
  createAccount(@Request() req: { body: TCreate }) {
    return this.accountService.create(req.body);
  }
}
