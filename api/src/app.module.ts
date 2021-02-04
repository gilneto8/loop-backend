import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import internals from './internals';
import modules from './modules';
import { HTTPLogger } from './internals/middlewares/http-logger';

@Module({
  imports: [...internals, ...modules],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(HTTPLogger).forRoutes('*');
  }
}
