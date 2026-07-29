import { Module } from '@nestjs/common';
import { RecadosController } from '@/recados/recados.controller';
import { RecadosService } from '@/recados/recados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recado])],
  controllers: [RecadosController],
  providers: [RecadosService],
})
export class RecadosModule {}
