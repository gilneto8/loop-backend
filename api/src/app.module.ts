import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import internals from './internals';
import modules from './modules';

@Module({
  imports: [...internals, ...modules],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
