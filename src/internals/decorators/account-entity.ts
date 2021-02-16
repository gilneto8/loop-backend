import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import getAccountDto from '../../modules/account/dtos/getAccount.dto';

export const AccountEntity = createParamDecorator(
  (_, ctx: ExecutionContext): getAccountDto => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
