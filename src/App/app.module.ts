import { Module } from '@nestjs/common';
import { AppController } from '@/App/app.controller';
import { AppService } from '@/App/app.service';
import { RecadosModule } from '@/recados/recados.module';

@Module({
  imports: [RecadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
