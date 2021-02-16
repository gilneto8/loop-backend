import { join } from 'path';
const fs = require('fs');

export function watch(path: string, fn: () => unknown, reload = false) {
  unwatch(path);
  fs.watchFile(join(process.cwd(), path), () => {
    console.log(`Changes made to "${path}", executing update`);
    try {
      fn();
      console.log('Update execution successful');
      if (reload) {
        // TODO reload app to force reload
      }
    } catch (err) {
      throw err;
    }
  });
}

export function unwatch(path: string) {
  fs.unwatchFile(path);
}
