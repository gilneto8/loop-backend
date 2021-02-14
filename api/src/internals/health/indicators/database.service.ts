import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus';
import { Client } from 'pg';

@Injectable()
export class PostgresHealthIndicator extends HealthIndicator {
  async check(key: string): Promise<HealthIndicatorResult> {
    const connectionString = process.env.DATABASE_URL;
    const client = new Client({ connectionString });
    try {
      await client.connect();
      await client.end();
      return this.getStatus(key, true);
    } catch (err) {
      throw new HealthCheckError('Postgres failed', this.getStatus(key, false));
    }
  }
}
