import { NexusGenArgTypes } from '../../../internals/nexus/__generated/nexus-typegen';

type TDeleteWaypoint = NexusGenArgTypes['Mutation']['deleteOneWaypoint']['where'];

export default class deleteWaypointDto implements TDeleteWaypoint {
  id!: number;
}

export type DeleteOpts = {
  deletePaths?: boolean;
};
