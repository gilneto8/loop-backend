import {
  NexusGenArgTypes,
  NexusGenScalars,
} from '../../../internals/nexus/__generated/nexus-typegen';

type TCreateTrip = NexusGenArgTypes['Mutation']['createOneTrip']['data'];

export default class createTripDto implements TCreateTrip {
  createdAt!: NexusGenScalars['DateTime'];
  deletedAt!: NexusGenScalars['DateTime'];
  description!: string | null;
  name!: string;
  updatedAt!: NexusGenScalars['DateTime'];
  owner!: any; // NexusGenInputs['AccountCreateNestedOneWithoutTripsInput'];
  paths!: any; // NexusGenInputs['PathCreateNestedManyWithoutTripInput'];
  waypoints!: any; // NexusGenInputs['WaypointCreateNestedManyWithoutTripInput'];
}
