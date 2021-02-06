import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import moment from 'moment';
import { ErrorMessages } from '../../utils/enums/error-messages';
import { clc } from '@nestjs/common/utils/cli-colors.util';

@Catch()
export class ExceptionLoggerFilter implements ExceptionFilter {
  private logger = new Logger('Exception');

  catch(exception: unknown, host: ArgumentsHost): void {
    // console.log(exception);
    const ctx = host.switchToHttp();
    const { url, method } = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const now = moment().format('DD/MMM/YYYY:HH:mm:ss ZZ');

    const e =
      exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            message: exception.getResponse(),
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: ErrorMessages.UNKNOWN,
          };
    const statusKey = HttpStatus[e.status];

    if (typeof e.message === 'object') {
      /*
      if messageContent arrives here as object, then
        certainly has field 'message'
      */
      // @ts-ignore
      e.message = e.message.message;
    }

    const entry = clc.red(
      `${e.status} ${statusKey} [${now}] ${method} ${url} "${e.message}"`,
    );
    this.logger.log(entry);

    response.status(e.status).json({
      statusCode: e.status,
      timestamp: now,
      path: url,
      message: e.message,
    });
  }
}
