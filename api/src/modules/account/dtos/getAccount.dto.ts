import { NexusGenObjects } from '../../../internals/nexus/__generated/nexus-typegen';

type TAccount = NexusGenObjects['Account'];

export default class getAccountDto implements TAccount {
  id!: number;
  name!: string;
  email!: string;
  details!: string | null;
}
