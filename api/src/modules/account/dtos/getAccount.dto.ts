import {
  NexusGenObjects,
  NexusGenScalars,
} from '../../../internals/nexus/__generated/nexus-typegen';

type TAccount = NexusGenObjects['Account'];

export default class getAccountDto implements TAccount {
  id!: number;
  name!: string;
  email!: string;
  details!: string | null;
  createdAt!: NexusGenScalars['DateTime'];
  updatedAt!: NexusGenScalars['DateTime'];
}
