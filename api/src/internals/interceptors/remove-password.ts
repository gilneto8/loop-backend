import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class RemovePasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<unknown>) {
    return next.handle().pipe(
      map((value: any) => {
        if (value.password) {
          delete value.password;
        }
        return value;
      }),
    );
  }
}
