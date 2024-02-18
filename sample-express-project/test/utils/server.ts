import * as expressServer from '../../index';

export const setupServer = () => {
  const server = expressServer.default;

  // Close the server after all tests are done.
  afterAll(() => {
    server.close();
  });

  return server;
};
