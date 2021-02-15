import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get(':id')
  getAccount(@Param('id', new ParseIntPipe()) id: number) {
    return this.accountService.get(id);
  }
}
