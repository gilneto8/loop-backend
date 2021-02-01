import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { User } from './users/users.service';
import { LocalAuthGuard } from './auth/strategies/local/local.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/strategies/jwt/jwt.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: { user: User }) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUser(@Request() req: { user: User }) {
    return req.user;
  }
}
