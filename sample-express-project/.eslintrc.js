module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            message:
              'Do not import index.ts from anywhere except routers/appRouter.ts',
            target: 'index.ts',
            from: '!(node_modules)/',
            except: ['routers/appRouter.ts'],
          },
          {
            message: 'Do not import from routers to services or repositories',
            target: 'routers/**/*',
            from: '(services|repositories)/**/*',
          },
          {
            message:
              'Do not import from controllers to routers or repositories',
            target: 'controllers/**/*',
            from: '(routers|repositories)/**/*',
          },
          {
            message: 'Do not import from services to routers or controllers',
            target: 'services/**/*',
            from: '(routers|controllers)/**/*',
          },
          {
            message:
              'Do not import from repositories to routers or controllers',
            target: 'repositories/**/*',
            from: '(routers|controllers|services)/**/*',
          },
          {
            message: 'Do not import from test files',
            target: '!(test)/*',
            from: 'test/**/*',
            except: ['**/*.spec.ts'],
          },
        ],
      },
    ],
  },
};
