import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get(AppController);
    appService = app.get(AppService);
  });

  describe('getHello', () => {
    it('should return the message from AppService', () => {
      const mockMessage = 'Dummy Hello World';
      jest.spyOn(appService, 'getHello').mockReturnValue(mockMessage);

      const result = appController.getHello();

      expect(result).toEqual({ message: mockMessage });
      expect(appService.getHello).toHaveBeenCalled();
    });
  });
});
