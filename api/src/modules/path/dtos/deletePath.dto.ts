import { NexusGenArgTypes } from '../../../internals/nexus/__generated/nexus-typegen';

type TDeletePath = NexusGenArgTypes['Mutation']['deleteOneWaypoint']['where'];

export default class deletePathDto implements TDeletePath {
  id!: number;
}
