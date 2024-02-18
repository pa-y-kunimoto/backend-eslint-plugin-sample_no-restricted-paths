import { AppController } from '../controllers/AppController';
import * as express from 'express';

/**
 * Creates the router for the application.
 * @returns The router for the application.
 */
const createAppRouter = (): express.Router => {
  const router = express.Router();

  const appController = AppController.getSingleton();
  router.get('/', async (req, res) => await appController.getHello(req, res));

  return router;
};

/**
 * Represents the router for the application.
 */
export const appRouter = createAppRouter();
