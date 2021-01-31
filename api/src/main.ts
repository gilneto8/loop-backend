import 'source-map-support/register';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { execSync } from 'child_process';
const fs = require('fs');

type ModuleHotData = {
  closingPromise?: Promise<unknown>;
};

declare const module: any;

const schemaPath = `${process.env.PRISMA_PATH}/${process.env.PRISMA_SCHEMA_NAME}`;

async function bootstrap() {
  const closingPromise = (module.hot?.data as ModuleHotData | undefined)
    ?.closingPromise;
  if (closingPromise) {
    await closingPromise;
  }

  fs.unwatchFile(schemaPath);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose((data: ModuleHotData) => {
      data.closingPromise = app.close();
    });
  }
}

bootstrap()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    fs.watchFile(join(process.cwd(), schemaPath), () => {
      console.log(`Changes made to "${schemaPath}", updating`);
      try {
        execSync(
          `npx prisma migrate dev --name auto-generated --schema=${schemaPath} --preview-feature`,
          { stdio: 'inherit' },
        );
        console.log('Update successful');
        // TODO reload app to force plugin to run
      } catch (err) {
        throw new Error(err.message);
      }
    });
  });
