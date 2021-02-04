import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../../modules/account/account.service';
import getAccountDto from '../../modules/account/dtos/getAccount.dto';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateAccount(
    email: string,
    password: string,
  ): Promise<getAccountDto | null> {
    const account = await this.accountService.validate(email);
    if (account && account.password === password) {
      const { password, ...result } = account;
      return result;
    }
    return null;
  }

  async login(account: getAccountDto) {
    return {
      access_token: this.jwtService.sign(account),
    };
  }
}
