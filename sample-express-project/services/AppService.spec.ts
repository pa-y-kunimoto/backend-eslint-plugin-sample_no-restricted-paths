import { AppService } from './AppService';

describe('AppService', () => {
  describe('static getSingleton', () => {
    it('should return a singleton instance of AppService', () => {
      // Arrange

      // Act
      const firstCalled = AppService.getSingleton();
      const secondCalled = AppService.getSingleton();

      // Assert
      expect(firstCalled).toBeInstanceOf(AppService);
      expect(secondCalled).toBeInstanceOf(AppService);
      expect(secondCalled).toBe(firstCalled);
    });
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      // Arrange
      const appService = new AppService();

      // Act
      const result = await appService.getHello();

      // Assert
      expect(result).toBe('Hello World!');
    });
  });
});
