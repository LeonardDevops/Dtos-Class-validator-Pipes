import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RecadosService } from '@/recados/recados.service';
import { CreateRecadoDto } from './dtos/create-recado.dto';
import { UpdateRecadoDto } from './dtos/update-recado.dto';

@Controller('recados') // rotas da minha controle indo para rota recados
export class RecadosController {
  constructor(private readonly recadosControllerService: RecadosService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.recadosControllerService.findAll();
    // return `retornando todos os recados Limit=${limit}, Offset=${offset}`;
  }

  @Get(':id/') // decorator de parametros  dinamico :Params
  findOne(@Param('id') id: number) {
    // exibindo as chaves
    return this.recadosControllerService.findOne(id);
  }

  @Post()
  async create(@Body() createRecadoDto: CreateRecadoDto) {
    return await this.recadosControllerService.create(createRecadoDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecadoDto: UpdateRecadoDto,
  ) {
    return this.recadosControllerService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.recadosControllerService.remove(id);
  }
  // @Get(':id/hello')
  // hello() {
  //   console.log(this.recadosControllerService.hello());
  //   this.recadosControllerService.hello();
  // }
}
