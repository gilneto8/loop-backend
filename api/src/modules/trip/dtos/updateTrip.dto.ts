import { NexusGenArgTypes } from '../../../internals/nexus/__generated/nexus-typegen';
import getAccountDto from '../../account/dtos/getAccount.dto';

type TUpdateTrip = NexusGenArgTypes['Mutation']['updateOneTrip']['data'];

export default class updateTripDto implements TUpdateTrip {
  name!: { set?: string | undefined } | undefined;
  description!: { set?: string | undefined } | undefined;
}
