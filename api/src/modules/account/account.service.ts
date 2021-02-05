import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../internals/prisma/prisma.service';
import createAccountDto from './dtos/createAccount.dto';
import updateAccountDto from './dtos/updateAccount.dto';
import { ErrorMessages } from '../../utils/enums/error-messages';
import { PostgresErrorCodes } from '../../utils/enums/postgres-error-codes';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  validate(email: string) {
    try {
      return this.prisma.account.findUnique({ where: { email } });
    } catch (err) {
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async get(id: number) {
    const account = await this.prisma.account.findUnique({ where: { id } });
    if (!account)
      throw new HttpException(ErrorMessages.ID_NOT_FOUND, HttpStatus.NOT_FOUND);
    return account;
  }

  create(params: createAccountDto) {
    try {
      return this.prisma.account.create({ data: { ...params } });
    } catch (err) {
      if (err?.code === PostgresErrorCodes.UniqueViolation) {
        throw new HttpException(
          ErrorMessages.EMAIL_ALREADY_EXISTS,
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  update(id: number, params: updateAccountDto) {
    try {
      return this.prisma.account.update({
        data: params,
        where: { id },
      });
    } catch (err) {
      throw new HttpException(
        ErrorMessages.UNKNOWN,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
