import { AppController, GetAppRes } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import * as express from 'express';

describe('AppController', () => {
  describe('static getSingleton', () => {
    it('should return a singleton instance of AppController', () => {
      // Arrange
      const appServiceMock = jest.spyOn(AppService, 'getSingleton');

      // Act
      AppController.getSingleton();

      // Assert
      expect(appServiceMock).toHaveBeenCalledTimes(1);
      expect(appServiceMock).toHaveReturnedWith(expect.any(AppService));
    });

    it('should return the same instance of AppController on subsequent calls', () => {
      // Arrange
      const appServiceMock = jest.spyOn(AppService, 'getSingleton');

      // Act
      const firstCalled = AppController.getSingleton();
      const secondCalled = AppController.getSingleton();

      // Assert
      expect(appServiceMock).toHaveBeenCalledTimes(1);
      expect(appServiceMock).toHaveReturnedWith(expect.any(AppService));
      expect(firstCalled).toBe(secondCalled);
    });
  });

  describe('getHello', () => {
    it('should call appService.getHello and send the response', async () => {
      // Arrange
      const appServiceMock = {
        getHello: jest.fn().mockResolvedValue('Dummy Hello World!'),
      };
      const appController = new AppController(appServiceMock);
      const req = {} as express.Request;
      const res = {
        send: jest.fn(),
      } as unknown as express.Response<GetAppRes>;

      // Act
      await appController.getHello(req, res);

      // Assert
      expect(appServiceMock.getHello).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenCalledWith({ message: 'Dummy Hello World!' });
    });
  });
});
