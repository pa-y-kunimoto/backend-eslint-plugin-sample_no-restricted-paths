export const setupE2ETestEnv = async (): Promise<void> => {
  process.env.NESTJS_APP_PORT = '63001';
};
