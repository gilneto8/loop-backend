import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './internals/auth/strategies/jwt/jwt.guard';

export const GLOBAL_PROVIDERS = [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
];
