import 'source-map-support/register';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './internals/auth/strategies/jwt/jwt.guard';
import { ExceptionLoggerFilter } from './internals/filters/exception-logger';

export const GLOBAL_PROVIDERS = [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
  {
    provide: APP_FILTER,
    useClass: ExceptionLoggerFilter,
  },
];
