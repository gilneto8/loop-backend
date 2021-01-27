import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Account } from '../account/account';

@ObjectType('Trip')
export class Trip {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String || null, { nullable: true })
  description?: string;

  @Field(() => Boolean, { defaultValue: false })
  deleted: boolean;

  @Field(() => String)
  name: string;

  @Field(() => Account)
  owner: Account;
}
