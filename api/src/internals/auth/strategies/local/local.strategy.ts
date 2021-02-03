import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../auth.service';
import getAccountDto from '../../../../modules/account/dtos/getAccount.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<getAccountDto> {
    const account = await this.authService.validate(username, password);
    if (!account) {
      throw new UnauthorizedException();
    }
    return account;
  }
}
