import { PartialType } from '@nestjs/mapped-types';
import { CreateRecadoDto } from './create-recado.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  @IsString()
  @IsNotEmpty()
  readonly texto!: string;
}
