import 'source-map-support/register';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

type ModuleHotData = {
  closingPromise?: Promise<unknown>;
};

declare const module: any;

async function bootstrap() {
  const closingPromise = (module.hot?.data as ModuleHotData | undefined)
    ?.closingPromise;
  if (closingPromise) {
    await closingPromise;
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose((data: ModuleHotData) => {
      data.closingPromise = app.close();
    });
  }
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
