import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Recado } from '@/recados/entities/recado.entity';
import { CreateRecadoDto } from './dtos/create-recado.dto';
import { UpdateRecadoDto } from './dtos/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado) // usar decorator InjectRepository pra injetar os dados da class Recado
    private readonly recadoRepository: Repository<Recado>,
  ) {}

  async findAll() {
    try {
      const recados = await this.recadoRepository.find();
      return recados;
    } catch (error: any) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      const recado = await this.recadoRepository.findOne({
        where: {
          id,
        },
      });
      if (recado) return recado;
    } catch (error) {
      console.log(error);
      throw new HttpException('esse erro e do servidor', HttpStatus.NOT_FOUND);
    }
  }

  async create(body: CreateRecadoDto) {
    const createRecado = {
      ...body,
      data: new Date(),
      lido: false,
    };
    const recado = this.recadoRepository.create(createRecado);
    return await this.recadoRepository.save(recado);
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const partialUpdateRecadoDto = {
      texto: updateRecadoDto?.texto,
      lido: updateRecadoDto?.lido,
    };
    const updateRecado = await this.recadoRepository.preload({
      id,
      ...partialUpdateRecadoDto,
    });

    if (!updateRecado) return 'erro';

    return this.recadoRepository.save(updateRecado);
  }

  async remove(id: number) {
    // filtra dentro do meu objeto recados todos os itens  diferente do  id enviado na requisicao ;
    const deleteRecado = await this.recadoRepository.findOneBy({
      id,
    });

    if (!deleteRecado) return 'erro';

    return this.recadoRepository.remove(deleteRecado);
  }
}
