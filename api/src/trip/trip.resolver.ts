import 'reflect-metadata';
import {
  Args,
  Context,
  Field,
  ID,
  InputType,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { Trip } from './trip';
import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@InputType()
class TripIDInput {
  @Field((type) => ID)
  id: number;
}

@Resolver(Trip)
export class TripResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @ResolveField()
  async owner(@Root() trip: Trip) {
    return this.prismaService.trip
      .findUnique({
        where: {
          id: trip.id,
        },
      })
      .owner();
  }

  @Query(() => [Trip])
  async getTrip(@Args('where') where: TripIDInput) {
    return this.prismaService.trip.findUnique({
      where: {
        id: where.id,
      },
    });
  }

  @Query(() => [Trip])
  async filterTrips(@Args('searchString') searchString: string) {
    return this.prismaService.trip.findMany({
      where: {
        OR: [
          { title: { contains: searchString } },
          { description: { contains: searchString } },
        ],
      },
    });
  }

  @Query(() => [Trip])
  async getTrips(@Context() ctx) {
    return this.prismaService.trip.findMany({
      where: {
        deleted: false,
      },
    });
  }

  @Query(() => [Trip])
  async getDeletedTrips() {
    return this.prismaService.trip.findMany({
      where: {
        deleted: true,
      },
    });
  }
}
