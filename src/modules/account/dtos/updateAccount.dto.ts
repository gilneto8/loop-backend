import {
  NexusGenArgTypes,
  NexusGenInputs,
} from '../../../internals/nexus/__generated/nexus-typegen';
import { Unnull } from '../../../utils/remove-null-type';

type TUpdateAccount = NexusGenArgTypes['Mutation']['updateOneAccount']['data'];

export default class updateAccountDto implements TUpdateAccount {
  name!: Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']> | undefined;
  details!:
    | Unnull<NexusGenInputs['StringFieldUpdateOperationsInput']>
    | undefined;
}
