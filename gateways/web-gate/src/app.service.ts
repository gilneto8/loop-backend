import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(@Inject('accounts-svc') private readonly accounts: ClientProxy, @Inject('trips-svc') private readonly trips: ClientProxy) {}

  pingAccounts() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.accounts.send<string>(pattern, payload).pipe(map((message: string) => ({ message, duration: Date.now() - startTs })));
  }

  pingTrips() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.trips.send<string>(pattern, payload).pipe(map((message: string) => ({ message, duration: Date.now() - startTs })));
  }
}
