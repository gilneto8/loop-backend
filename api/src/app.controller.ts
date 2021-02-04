import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './internals/auth/auth.service';
import { Public } from './internals/decorators/public-route';
import { LocalAuthGuard } from './internals/auth/strategies/local/local.guard';
import { TLoginCredentials } from './internals/auth/auth.types';
import getAccountDto from './modules/account/dtos/getAccount.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() req: { body: TLoginCredentials; user: getAccountDto },
  ) {
    return this.authService.login(req.user);
  }
}
