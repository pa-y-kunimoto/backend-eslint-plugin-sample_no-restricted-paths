export class AppService {
  /**
   * Retrieves the "Hello World!" message.
   * @returns The "Hello World!" message.
   */
  async getHello(): Promise<string> {
    return 'Hello World!';
  }

  /**
   * Represents a singleton instance of the AppService class.
   */
  private static singleton: AppService;
  /**
   * Returns the singleton instance of the AppService class.
   * If the singleton instance does not exist, it creates a new instance and returns it.
   * @returns The singleton instance of the AppService class.
   */
  static getSingleton(): AppService {
    if (!this.singleton) {
      this.singleton = new AppService();
    }
    return this.singleton;
  }
}
