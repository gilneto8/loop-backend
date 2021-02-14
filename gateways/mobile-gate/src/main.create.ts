import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Loop Mobile API Gateway')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {});

  SwaggerModule.setup('api-docs', app, document);

  app.enableShutdownHooks();
  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
    }),
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  return app;
}
