import { NexusGenArgTypes, NexusGenEnums } from '../../../internals/nexus/__generated/nexus-typegen';
import getWaypointDto from '../../waypoint/dtos/getWaypoint.dto';
import getTripDto from '../../trip/dtos/getTrip.dto';
import { YupSchema } from '../../../internals/decorators/yup-schema';
import yup from 'yup';

type TCreatePath = NexusGenArgTypes['Mutation']['createOnePath']['data'];

@YupSchema(
  yup
    .object<createPathDto>({
      name: yup.string().required(),
      type: yup.string().oneOf(['BOAT', 'CAR', 'PEDESTRIAN', 'PLANE', 'TRAIN']).required(),
      description: yup.string(),
      tripId: yup.number().required(),
      fromId: yup.number().required(),
      toId: yup.number().required(),
    })
    .required(),
)
export default class createPathDto implements TCreatePath {
  name!: string;
  type!: NexusGenEnums['PathType'];
  description!: string | undefined;
  tripId!: getTripDto['id'];
  fromId!: getWaypointDto['id'];
  toId!: getWaypointDto['id'];
}
