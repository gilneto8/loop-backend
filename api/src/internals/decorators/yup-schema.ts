import { SetMetadata } from '@nestjs/common';
import { Schema } from 'yup';

export const YUP_SCHEMA_KEY = 'yup-schema';

/*
  Must mark schemas with .required() or .defined().

  NestJS parsers always parse everything out of the request as an object literal.
  Even when the query parameters or bodies are undefined.
*/
export type SupportedSchema = Schema<object>;

export const YupSchema = (schema: SupportedSchema) =>
  SetMetadata(YUP_SCHEMA_KEY, schema);
