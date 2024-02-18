# sample-nestjs-project

<div style="display:flex; gap: 8px;">

[![Lint](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/lint-sample-nestjs-project.yml/badge.svg)](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/lint-sample-nestjs-project.yml)

[![Test](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/test-sample-nestjs-project.yml/badge.svg)](https://github.com/pa-y-kunimoto/nestjs-eslint-plugin-sample_no-restricted-paths/actions/workflows/test-sample-nestjs-project.yml)

</div>

Sample Web Server with NestJS

Based on Nest CLI

## Quick Start

Execute below commands. After launching the server, access http://localhost:3001/ to see the "Hello World!" message.

```shell
npm ci
npm run build
npm run start
```

## File Structure

```
sample-nestjs-project/
├ src/
│ ├ app.controller.spec.ts
│ ├ app.controller.ts
│ ├ app.module.ts
│ ├ app.service.spec.ts
│ ├ app.service.ts
│ └ main.ts
├ test/
│ ├ env/
│ │ └ setup.ts
│ ├ app.e2e-spec.ts
│ ├ jest-e2e.json
│ └ setupE2E.ts
├ nest-cli.json
├ package-lock.json
├ package.json
├ tsconfig.build.json
└ tsconfig.json
```
