import {
  NexusGenArgTypes,
  NexusGenObjects,
} from '../../internals/nexus/__generated/nexus-typegen';
import { Unnull } from '../../utils/remove-null-type';

export type TAccountObj = NexusGenObjects['Account'];

export type TCreateAccountParams = Unnull<
  NexusGenArgTypes['Mutation']['createOneAccount']['data']
>;

export type TGetAccountParams = Unnull<
  NexusGenArgTypes['Query']['account']['where']
>;
