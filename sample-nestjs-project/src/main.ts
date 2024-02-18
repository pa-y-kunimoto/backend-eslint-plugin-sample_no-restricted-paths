import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const APP_PORT = process.env.NESTJS_APP_PORT || 3001;

  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
}
bootstrap();
