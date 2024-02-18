import * as express from 'express';
import { AppService } from '../services/AppService';

export class AppController {
  /**
   * Creates an instance of the AppController class.
   * @param appService The injected AppService instance.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Retrieves the hello world message.
   * @param _req - The express request object. Unused.
   * @param res - The express response object.
   */
  async getHello(_req: express.Request, res: express.Response<GetAppRes>) {
    const message = await this.appService.getHello();
    res.send({ message });
  }

  /**
   * Represents a singleton instance of the AppController class.
   */
  private static singleton: AppController;
  /**
   * Returns the singleton instance of the AppController class.
   * If the singleton instance does not exist, it creates a new instance and returns it.
   * @returns The singleton instance of the AppController class.
   */
  static getSingleton(): AppController {
    if (!this.singleton) {
      const appService = AppService.getSingleton();
      this.singleton = new AppController(appService);
    }
    return this.singleton;
  }
}

export interface GetAppRes {
  message: string;
}
