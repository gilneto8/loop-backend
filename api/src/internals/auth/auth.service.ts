import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../../modules/account/account.service';
import { TAccount } from '../../modules/account/account.types';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<TAccount | null> {
    const account = await this.accountService.get({ email });
    if (account && account.password === password) {
      const { password, ...result } = account;
      return result;
    }
    return null;
  }

  async login(account: TAccount) {
    const payload = { email: account.email, sub: account.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
