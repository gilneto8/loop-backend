import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { PrismaService } from '../../internals/prisma/prisma.service';
import { TripService } from '../trip/trip.service';

@Module({
  providers: [AccountService, PrismaService, TripService],
  controllers: [AccountController],
})
export class AccountModule {}
