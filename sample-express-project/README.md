# sample-express-project [![Lint sample-express-project](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/lint-sample-express-project.yml/badge.svg)](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/lint-sample-express-project.yml) [![Test sample-express-project](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/test-sample-express-project.yml/badge.svg)](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/test-sample-express-project.yml)

Sample Web Server with Express.js

## Quick Start

Execute below commands. After launching the server, access http://localhost:3000/ to see the "Hello World!" message.

```shell
npm ci
npm run build
npm run start
```

## File Structure

```
sample-express-project/
├ controllers/
│ ├ AppController.spec.ts
│ └ AppController.ts
├ routers/
│ └ appRouter.ts
├ services/
│ ├ AppService.spec.ts
│ └ AppService.ts
├ test/
│ ├ env/
│ │ └ setup.ts
│ ├ utils/
│ │ └ server.ts
│ ├ app.e2e-spec.ts
│ ├ jest-e2e.json
│ └ setupE2E.ts
├ index.ts
├ package-lock.json
├ package.json
├ tsconfig.build.json
└ tsconfig.json

```
