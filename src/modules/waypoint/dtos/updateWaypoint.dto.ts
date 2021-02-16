import {
  NexusGenArgTypes,
  NexusGenInputs,
} from '../../../internals/nexus/__generated/nexus-typegen';
import { Unnull } from '../../../utils/remove-null-type';

type TUpdateWaypoint = NexusGenArgTypes['Mutation']['updateOneWaypoint']['data'];

export default class updateWaypointDto implements TUpdateWaypoint {
  name!: Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']> | undefined;
  description:
    | Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']>
    | undefined;
  type!: Unnull<NexusGenInputs['EnumWaypointTypeFieldUpdateOperationsInput']>;
  latitude!:
    | Unnull<NexusGenInputs['FloatFieldUpdateOperationsInput']>
    | undefined;
  longitude!:
    | Unnull<NexusGenInputs['FloatFieldUpdateOperationsInput']>
    | undefined;
  altitude!:
    | Unnull<NexusGenInputs['NullableFloatFieldUpdateOperationsInput']>
    | undefined;
}
