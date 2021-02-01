import 'source-map-support/register';
import { execSync } from 'child_process';
import { createApp } from './main.create';
import { watch } from './utils/file-utils';
import { getAutoMigrationCommand } from './utils/prisma/commands';

type ModuleHotData = {
  closingPromise?: Promise<unknown>;
};

declare const module: any;

const schemaPath = process.env.SCHEMA_PATH as string;

async function bootstrap() {
  const closingPromise = (module.hot?.data as ModuleHotData | undefined)
    ?.closingPromise;
  if (closingPromise) {
    await closingPromise;
  }

  const app = await createApp();
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
    watch(schemaPath, () =>
      execSync(getAutoMigrationCommand(schemaPath), { stdio: 'inherit' }),
    );
  });
