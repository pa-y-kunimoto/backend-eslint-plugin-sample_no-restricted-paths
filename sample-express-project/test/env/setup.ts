export const setupE2ETestEnv = async (): Promise<void> => {
  process.env.EXPRESS_APP_PORT = '63000';
};
