import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import { yellow } from '@nestjs/common/utils/cli-colors.util';

@Injectable()
export class HTTPLogger implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const then = moment();
    const { ip, method, originalUrl: url, httpVersion: protocol } = req;
    const user = req.get('user-agent') || '';

    res.on('finish', () => {
      const now = moment();
      const duration = moment.duration(now.diff(then)).asMilliseconds();

      const { statusCode: code } = res;
      const length = res.get('content-length');
      const ms = yellow(`+${duration}ms`);
      const date = then.format('DD/MMM/YYYY:HH:mm:ss ZZ');

      // NCSA Common log format
      this.logger.log(`${ip} ${user} [${date}] "${method} ${url} HTTP/${protocol}" ${code} ${length} ${ms}`);
    });

    next();
  }
}
