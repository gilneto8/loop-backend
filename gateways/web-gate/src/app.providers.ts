import 'source-map-support/register';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionLoggerFilter } from './internals/filters/exception-logger';

export const GLOBAL_PROVIDERS = [
  {
    provide: APP_FILTER,
    useClass: ExceptionLoggerFilter,
  },
];
