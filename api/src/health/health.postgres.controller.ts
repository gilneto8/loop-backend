import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { PostgresHealthCheckService } from './health.postgres.service';

@Controller('health')
export class PostgresHealthController {
  constructor(
    private health: HealthCheckService,
    private pg: PostgresHealthCheckService,
  ) {}

  @Get('pg')
  @HealthCheck()
  check() {
    return this.health.check([() => this.pg.isHealthy()]);
  }
}
