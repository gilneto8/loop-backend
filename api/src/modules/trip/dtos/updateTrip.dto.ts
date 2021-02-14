import { NexusGenArgTypes, NexusGenInputs } from '../../../internals/nexus/__generated/nexus-typegen';
import { Unnull } from '../../../utils/remove-null-type';

type TUpdateTrip = NexusGenArgTypes['Mutation']['updateOneTrip']['data'];

export default class updateTripDto implements TUpdateTrip {
  name!: Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']> | undefined;
  description!: Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']> | undefined;
}
