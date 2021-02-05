import { NexusGenArgTypes } from '../../../internals/nexus/__generated/nexus-typegen';

type TDeleteTrip = NexusGenArgTypes['Mutation']['deleteOneTrip']['where'];

export default class deleteTripDto implements TDeleteTrip {
  id!: number;
}
