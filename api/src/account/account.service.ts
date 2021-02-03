import { Injectable } from '@nestjs/common';
import { PrismaService } from '../internals/prisma/prisma.service';
import { TCreate, TGet } from './account.types';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  get(params: TGet) {
    /* key CAN be used as index in this case */
    // @ts-ignore
    Object.keys(params).forEach((key) => !params[key] && delete params[key]);
    if (params.id) params.id = +params.id;
    return this.prisma.account.findUnique({
      where: {
        ...params,
      },
    });
  }

  create(params: TCreate) {
    return this.prisma.account.create({ data: { ...params } });
  }
}
