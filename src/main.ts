import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/App/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove chaves que sao enviadas sem estar no meu Dto
      forbidNonWhitelisted: true, // lanca um recado  de error
      transform: false, // tenta transformar os tipos de dados DTOS pode gerar problema de desempenho
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});
