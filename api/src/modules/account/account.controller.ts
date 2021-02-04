import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { AccountService } from './account.service';
import getAccountDto from './dtos/getAccount.dto';
import { AccountEntity } from '../../internals/decorators/account-entity';
import updateAccountDto from './dtos/updateAccount.dto';

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

  @Put()
  updateAccount(
    @AccountEntity() account: getAccountDto,
    @Request() req: { body: updateAccountDto },
  ) {
    return this.accountService.update(account.id, req.body);
  }
}
