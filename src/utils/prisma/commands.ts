export function getAutoMigrationCommand(path: string, init = false) {
  return `npx prisma migrate dev --name ${
    init ? 'init' : 'auto-generated'
  } --schema=${path} --preview-feature`;
}
