import { Controller, Get } from '@nestjs/common';
import {
  DNSHealthIndicator,
  HealthCheck,
  HealthCheckService,
} from '@nestjs/terminus';
import { PostgresHealthIndicator } from './indicators/database.service';
import { Public } from '../../auth/decorators/public-route';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
    private pg: PostgresHealthIndicator,
  ) {}

  @Public()
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.dns.pingCheck('dns', 'https://docs.nestjs.com'),
      () => this.pg.check('pg'),
    ]);
  }
}
