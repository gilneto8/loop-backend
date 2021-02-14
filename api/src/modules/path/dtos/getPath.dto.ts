import { NexusGenEnums, NexusGenObjects, NexusGenScalars } from '../../../internals/nexus/__generated/nexus-typegen';

type TPath = NexusGenObjects['Path'];

export default class getPathDto implements TPath {
  id!: number;
  name!: string;
  type!: NexusGenEnums['PathType'];
  description!: string | null;
  tripId!: number;
  toId!: number;
  fromId!: number;
  createdAt!: NexusGenScalars['DateTime'];
  updatedAt!: NexusGenScalars['DateTime'];
  deletedAt!: NexusGenScalars['DateTime'] | null;
}
