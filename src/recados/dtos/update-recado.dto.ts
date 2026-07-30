import { PartialType } from '@nestjs/mapped-types';
import { CreateRecadoDto } from './create-recado.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  @IsString()
  @IsOptional()
  readonly texto!: string;

  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;
}
