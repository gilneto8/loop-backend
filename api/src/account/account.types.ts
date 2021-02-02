import { NexusGenArgTypes } from '../nexus/__generated/nexus-typegen';
import { Unnull } from '../utils/remove-null-type';

export type TGet = Unnull<NexusGenArgTypes['Query']['account']['where']>;
export type TCreate = Unnull<
  NexusGenArgTypes['Mutation']['createOneAccount']['data']
>;
