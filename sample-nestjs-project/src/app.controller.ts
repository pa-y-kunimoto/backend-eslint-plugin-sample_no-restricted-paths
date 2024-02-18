import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  /**
   * Creates an instance of the AppController class.
   * @param appService The injected AppService instance.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Retrieves the hello message from the app service.
   * @returns The hello message.
   */
  @Get()
  getHello(): GetHelloRes {
    const message = this.appService.getHello();
    return { message };
  }
}

interface GetHelloRes {
  message: string;
}
