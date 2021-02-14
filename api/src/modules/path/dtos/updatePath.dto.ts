import { NexusGenArgTypes, NexusGenInputs } from '../../../internals/nexus/__generated/nexus-typegen';
import { Unnull } from '../../../utils/remove-null-type';

type TUpdatePath = NexusGenArgTypes['Mutation']['updateOnePath']['data'];

export default class updatePathDto implements TUpdatePath {
  name!: Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']> | undefined;
  description: Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']> | undefined;
  type!: Unnull<NexusGenInputs['EnumPathTypeFieldUpdateOperationsInput']> | undefined;
  fromId!: NexusGenInputs['WaypointWhereUniqueInput']['id'] | undefined;
  toId!: NexusGenInputs['WaypointWhereUniqueInput']['id'] | undefined;
}
