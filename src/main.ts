const morgan = require('morgan');
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['wkils0iwiwue'],
    }),
  );
  app.use(morgan('combined'));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000, () => {
    console.log(`listening to traffic on port 3000`);
  });
}
bootstrap();
