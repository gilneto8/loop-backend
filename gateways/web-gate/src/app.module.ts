import {
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
  OnApplicationShutdown,
} from '@nestjs/common';
import { GLOBAL_PROVIDERS } from './app.providers';
import { HTTPLogger } from './internals/middlewares/http-logger';

@Module({
  imports: [],
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
