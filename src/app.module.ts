import {
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
  OnApplicationShutdown,
} from '@nestjs/common';
import internals from './internals';
import modules from './modules';
import { HTTPLogger } from './internals/middlewares/http-logger';
import { GLOBAL_PROVIDERS } from './app.providers';

@Module({
  imports: [...internals, ...modules],
  controllers: [],
  providers: [...GLOBAL_PROVIDERS],
})
export class AppModule implements NestModule, OnApplicationShutdown {
  private logger = new Logger('RootApplication');

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(HTTPLogger).forRoutes('*');
  }

  onApplicationShutdown(signal?: string): void {
    this.logger.log(
      `Application shutting down${signal ? ` with signal ${signal}` : ''}.`,
    );
  }
}
