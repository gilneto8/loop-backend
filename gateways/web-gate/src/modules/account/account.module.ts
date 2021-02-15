import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import ApiAdapter from '../../internals/api/api';

@Module({
  providers: [AccountService, ApiAdapter],
  controllers: [AccountController],
})
export class AccountModule {}
