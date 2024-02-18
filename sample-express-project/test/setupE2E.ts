import { setupE2ETestEnv } from './env/setup';

const main = async (): Promise<void> => {
  await setupE2ETestEnv();
};

main();
