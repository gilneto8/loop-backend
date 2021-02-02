import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TCreate, TGet } from './account.types';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  get(params: TGet) {
    return this.prisma.account.findUnique({
      where: {
        id: params.id,
      },
    });
  }

  create(params: TCreate) {
    return this.prisma.account.create({ data: { ...params } });
  }
}
