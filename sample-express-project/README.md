# sample-express-project

<div style="display:flex; gap: 8px;">

[![Lint](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/lint-sample-express-project.yml/badge.svg)](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/lint-sample-express-project.yml)

[![Test](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/test-sample-express-project.yml)](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/test-sample-express-project.yml)

</div>

Sample Web Server with Express.js

## Quick Start

Execute below commands. Then, access to http://localhost:3000.

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
