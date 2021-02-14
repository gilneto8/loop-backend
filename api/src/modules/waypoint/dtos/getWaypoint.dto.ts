import { NexusGenEnums, NexusGenObjects, NexusGenScalars } from '../../../internals/nexus/__generated/nexus-typegen';

type TWaypoint = NexusGenObjects['Waypoint'];

export default class getWaypointDto implements TWaypoint {
  id!: number;
  name!: string;
  type!: NexusGenEnums['WaypointType'];
  description!: string | null;
  tripId!: number;
  createdAt!: NexusGenScalars['DateTime'];
  updatedAt!: NexusGenScalars['DateTime'];
  deletedAt!: NexusGenScalars['DateTime'] | null;
  latitude!: number;
  longitude!: number;
  altitude!: number | null;
}
