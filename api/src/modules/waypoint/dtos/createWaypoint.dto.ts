import {
  NexusGenArgTypes,
  NexusGenEnums,
} from '../../../internals/nexus/__generated/nexus-typegen';
import getTripDto from '../../trip/dtos/getTrip.dto';

type TCreateWaypoint = NexusGenArgTypes['Mutation']['createOneWaypoint']['data'];

export default class createWaypointDto implements TCreateWaypoint {
  description!: string | null;
  name!: string;
  tripId!: getTripDto['id'];
  type!: NexusGenEnums['WaypointType'];
  longitude!: number;
  latitude!: number;
  altitude!: number | null;
}
