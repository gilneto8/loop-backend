import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { User } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/decorators/public-route';
import { LocalAuthGuard } from './auth/strategies/local/local.guard';

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
