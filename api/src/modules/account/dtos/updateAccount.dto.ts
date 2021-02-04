import { NexusGenArgTypes } from '../../../internals/nexus/__generated/nexus-typegen';

type TUpdateAccount = NexusGenArgTypes['Mutation']['updateOneAccount']['data'];

export default class updateAccountDto implements TUpdateAccount {
  name!: { set?: string | undefined } | undefined;
  details!: { set?: string | undefined } | undefined;
}
