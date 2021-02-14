import { NexusGenObjects, NexusGenScalars } from '../../../internals/nexus/__generated/nexus-typegen';

type TTrip = NexusGenObjects['Trip'];

export default class getTripDto implements TTrip {
  id!: number;
  name!: string;
  description!: string | null;
  createdAt!: NexusGenScalars['DateTime'];
  updatedAt!: NexusGenScalars['DateTime'];
  deletedAt!: NexusGenScalars['DateTime'] | null;
  ownerId!: number;
}

export type GetOpts = {
  includeDeletedTrips?: boolean;
  includeDeletedWaypoints?: boolean;
  includeDeletedPaths?: boolean;
};
