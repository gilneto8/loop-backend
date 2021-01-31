## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# create first migration
$ npx prisma migrate dev --name init --schema=src/prisma/schema.prisma --preview-feature

# update prisma client
$ npx prisma generate

```
