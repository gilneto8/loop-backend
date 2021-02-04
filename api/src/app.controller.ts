import {
  Controller,
  Request,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './internals/auth/auth.service';
import { Public } from './internals/decorators/public-route';
import { LocalAuthGuard } from './internals/auth/strategies/local/local.guard';
import { TLoginCredentials } from './internals/auth/auth.types';
import getAccountDto from './modules/account/dtos/getAccount.dto';
import createAccountDto from './modules/account/dtos/createAccount.dto';
import { RemovePasswordInterceptor } from './internals/interceptors/remove-password';

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

  @Public()
  @UseInterceptors(RemovePasswordInterceptor)
  @Post('register')
  async register(
    @Request() req: { body: createAccountDto },
  ): Promise<getAccountDto> {
    return this.authService.register(req.body);
  }
}
