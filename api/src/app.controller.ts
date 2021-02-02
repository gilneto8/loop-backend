import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { User } from './users/users.service';
import { AuthService } from './internals/auth/auth.service';
import { Public } from './internals/decorators/public-route';
import { LocalAuthGuard } from './internals/auth/strategies/local/local.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: { user: User }) {
    return this.authService.login(req.user);
  }

  @Get('user')
  getUser(@Request() req: { user: User }) {
    return req.user;
  }
}
