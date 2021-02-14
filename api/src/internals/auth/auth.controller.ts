import { Controller, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../decorators/public-route';
import { LocalAuthGuard } from './strategies/local/local.guard';
import { TLoginCredentials } from './auth.types';
import getAccountDto from '../../modules/account/dtos/getAccount.dto';
import { RemovePasswordInterceptor } from '../interceptors/remove-password';
import createAccountDto from '../../modules/account/dtos/createAccount.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { body: TLoginCredentials; user: getAccountDto }) {
    return this.authService.login(req.user);
  }

  @Public()
  @UseInterceptors(RemovePasswordInterceptor)
  @Post('register')
  async register(@Request() req: { body: createAccountDto }): Promise<getAccountDto> {
    return this.authService.register(req.body);
  }
}
