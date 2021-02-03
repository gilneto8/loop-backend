import {
  NexusGenArgTypes,
  NexusGenObjects,
} from '../internals/nexus/__generated/nexus-typegen';
import { Unnull } from '../utils/remove-null-type';

export type TAccount = NexusGenObjects['Account'];

export type TCreate = Unnull<
  NexusGenArgTypes['Mutation']['createOneAccount']['data']
>;

export type TGet = Unnull<NexusGenArgTypes['Query']['account']['where']>;
export type TGetAccountParams = {
  id?: number;
  email?: string;
};
