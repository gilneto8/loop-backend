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
import createAccountDto from './dtos/createAccount.dto';
import getAccountDto from './dtos/getAccount.dto';

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
  ): Promise<getAccountDto | null> {
    return this.accountService.get(id);
  }

  @Post()
  createAccount(
    @Request() req: { body: createAccountDto },
  ): Promise<getAccountDto> {
    return this.accountService.create(req.body);
  }
}
