import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { DNSHealthController } from './health.dns.controller';
import { PostgresHealthController } from './health.postgres.controller';

@Module({
  imports: [TerminusModule],
  controllers: [],
  providers: [DNSHealthController, PostgresHealthController],
})
export class HealthModule {}
