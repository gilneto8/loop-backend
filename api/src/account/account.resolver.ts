import {
  Field,
  ID,
  InputType,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Account } from './account';

@InputType()
class AccountIDInput {
  @Field((type) => ID)
  id: number;
}

@Resolver(Account)
export class AccountResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @ResolveField()
  async trips(@Root() account: Account) {
    return this.prismaService.account
      .findUnique({
        where: {
          id: account.id,
        },
      })
      .trips();
  }
}
