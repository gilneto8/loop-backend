import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SupportedSchema, YUP_SCHEMA_KEY } from '../decorators/yup-schema';
import { ValidationError } from 'yup';

@Injectable()
export class SchemaValidationPipe implements PipeTransform<unknown> {
  constructor(private reflector: Reflector) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    const metatype = metadata.metatype;
    if (!metatype) throw new Error('No metatype');

    const schema = this.reflector.get<SupportedSchema | undefined>(
      YUP_SCHEMA_KEY,
      metatype,
    );
    if (!schema)
      throw new Error(`No yup schema assigned to metatype ${metatype.name}`);

    try {
      return schema.validateSync(value, {
        stripUnknown: true,
        abortEarly: true,
      });
    } catch (err: unknown) {
      if (err instanceof ValidationError) {
        throw new BadRequestException(err);
      } else {
        throw err;
      }
    }
  }
}
