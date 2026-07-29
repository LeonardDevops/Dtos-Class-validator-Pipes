import { Module } from '@nestjs/common';
import { AppController } from '@/App/app.controller';
import { AppService } from '@/App/app.service';
import { RecadosModule } from '@/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: '123456',
      autoLoadEntities: true, // carrega  entidades  de forma automatica
      synchronize: true, // sincroniza com o BD . nao deve ser usado em producao
    }),
    RecadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
