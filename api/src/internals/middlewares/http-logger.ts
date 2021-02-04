import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class HTTPLogger implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { ip, method, originalUrl: url } = req;
    const user = req.get('user-agent') || '';

    res.on('finish', () => {
      const { statusCode: code } = res;
      const length = res.get('content-length');

      this.logger.log(`${method} ${url} ${code} ${length} - ${user} ${ip}`);
    });

    next();
  }
}
