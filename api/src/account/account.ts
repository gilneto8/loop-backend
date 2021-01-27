import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Trip } from '../trip/trip';

@ObjectType('Account')
export class Account {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String || null, { nullable: true })
  description?: string;

  @Field(() => [Trip])
  trips: [Trip];
}
