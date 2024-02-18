import * as express from 'express';
import { appRouter } from './routers/appRouter';

const createExpressServer = () => {
  const APP_PORT = process.env.EXPRESS_APP_PORT || 3000;

  const app = express();

  app.use(express.json());
  app.use(appRouter);

  const server = app.listen(APP_PORT, () => {
    console.log(`Server is running at http://localhost:${APP_PORT}`);
  });

  return server;
};

export default createExpressServer();
