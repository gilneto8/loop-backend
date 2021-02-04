import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../internals/prisma/prisma.service';
import createAccountDto from './dtos/createAccount.dto';
import updateAccountDto from './dtos/updateAccount.dto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  validate(email: string) {
    return this.prisma.account.findUnique({ where: { email } });
  }

  get(id: number) {
    return this.prisma.account.findUnique({ where: { id } });
  }

  create(params: createAccountDto) {
    return this.prisma.account.create({ data: { ...params } });
  }

  update(id: number, params: updateAccountDto) {
    return this.prisma.account.update({
      data: params,
      where: { id },
    });
  }
}
