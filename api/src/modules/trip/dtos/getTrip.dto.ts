import { NexusGenObjects } from '../../../internals/nexus/__generated/nexus-typegen';

type TTrip = NexusGenObjects['Trip'];

export default class getTripDto implements TTrip {
  id!: number;
  name!: string;
  description!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  ownerId!: number;
}
