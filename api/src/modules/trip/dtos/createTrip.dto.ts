import { NexusGenArgTypes } from '../../../internals/nexus/__generated/nexus-typegen';
import getAccountDto from '../../account/dtos/getAccount.dto';

type TCreateTrip = NexusGenArgTypes['Mutation']['createOneTrip']['data'];

export default class createTripDto implements TCreateTrip {
  name!: string;
  owner!: any; // TODO how to map this to the account type?
  description!: string | undefined;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date | undefined;
  waypoints!: any;
  paths!: any;
}
