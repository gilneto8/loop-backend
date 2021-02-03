import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../internals/prisma/prisma.service';
import createAccountDto from './dtos/createAccount.dto';

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
}
