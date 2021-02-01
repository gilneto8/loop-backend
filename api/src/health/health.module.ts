import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { PostgresHealthIndicator } from './indicators/database.service';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [PostgresHealthIndicator],
})
export class HealthModule {}
