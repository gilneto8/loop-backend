import { Controller, Get } from '@nestjs/common';
import {
  DNSHealthIndicator,
  HealthCheck,
  HealthCheckService,
} from '@nestjs/terminus';

@Controller('health')
export class DNSHealthController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
  ) {}

  @Get('dns')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.dns.pingCheck('dns', 'https://docs.nestjs.com'),
    ]);
  }
}
