import { NexusGenArgTypes } from '../../../internals/nexus/__generated/nexus-typegen';

type TCreateAccount = NexusGenArgTypes['Mutation']['createOneAccount']['data'];

export default class createAccountDto implements TCreateAccount {
  name!: string;
  password!: string;
  email!: string;
  details!: string | undefined;
  trips!: any; // TODO how to map this to the trip type?
  createdAt!: Date;
  updatedAt!: Date;
}
