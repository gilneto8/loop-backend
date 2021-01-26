import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping-accounts')
  pingAccounts() {
    return this.appService.pingAccounts();
  }

  @Get('/ping-trips')
  pingTrips() {
    return this.appService.pingTrips();
  }
}
