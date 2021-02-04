import {
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
  OnApplicationShutdown,
} from '@nestjs/common';
import { AppController } from './app.controller';
import internals from './internals';
import modules from './modules';
import { HTTPLogger } from './internals/middlewares/http-logger';

@Module({
  imports: [...internals, ...modules],
  controllers: [AppController],
  providers: [],
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
