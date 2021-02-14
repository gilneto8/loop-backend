import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../../modules/account/account.service';
import getAccountDto from '../../modules/account/dtos/getAccount.dto';
import createAccountDto from '../../modules/account/dtos/createAccount.dto';
import { PostgresErrorCodes } from '../../utils/enums/postgres-error-codes';
import { ErrorMessages } from '../../utils/enums/error-messages';

const argon2 = require('argon2');

@Injectable()
export class AuthService {
  constructor(private accountService: AccountService, private jwtService: JwtService) {}

  async validateAccount(email: string, password: string): Promise<getAccountDto | null> {
    const account = await this.accountService.validate(email);
    if (!account) throw new HttpException(ErrorMessages.WRONG_CREDENTIALS, HttpStatus.UNAUTHORIZED);
    try {
      if (await argon2.verify(account.password, password)) {
        // don't set password inside `user` field
        const { password, ...result } = account;
        return result;
      }
    } catch (err) {
      new HttpException(ErrorMessages.WRONG_CREDENTIALS, HttpStatus.UNAUTHORIZED);
    }
    return null;
  }

  async login(account: getAccountDto) {
    return { access_token: this.jwtService.sign(account) };
  }

  async register(accountData: createAccountDto) {
    const hashedPass = await argon2.hash(accountData.password);
    try {
      return await this.accountService.create({
        ...accountData,
        password: hashedPass,
      });
    } catch (err) {
      if (err?.code === PostgresErrorCodes.UniqueViolation) {
        throw new HttpException(ErrorMessages.EMAIL_ALREADY_EXISTS, HttpStatus.CONFLICT);
      }
      throw new HttpException(ErrorMessages.UNKNOWN, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
