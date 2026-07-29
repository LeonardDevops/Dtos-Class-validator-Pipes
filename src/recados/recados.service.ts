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

  private lastId = 2;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'RECADOS UM',
      de: 'leonardo',
      para: 'jacqueline',
      lido: false,
      data: new Date(),
    },
    {
      id: 2,
      texto: 'RECADOS DOIS',
      de: 'zoe',
      para: 'jacqueline',
      lido: false,
      data: new Date(),
    },
  ];

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

  create(body: CreateRecadoDto) {
    this.lastId++;
    const newRecado: Recado = {
      ...body,
      data: new Date(),
      lido: false,
      id: this.lastId,
    };
    this.recados.push(newRecado);
    return this.recados;
  }

  update(id: number, body: UpdateRecadoDto) {
    const recadoExistenteIndex = this?.recados.findIndex(
      (item) => item?.id === +id,
    );
    if (recadoExistenteIndex >= 0) {
      const recadosExistentes = this?.recados[recadoExistenteIndex];
      this.recados[recadoExistenteIndex] = {
        ...recadosExistentes,
        ...body,
      };
    }
  }

  remove(id) {
    // filtra dentro do meu objeto recados todos os itens  diferente do  id enviado na requisicao ;
    this.recados = this.recados.filter((item) => item.id !== +id, {});
    return this.recados;
  }
}
