import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaDto } from '@/pessoa/dto/create-pessoa.dto';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsDate,
  IsOptional,
} from 'class-validator';

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {
  @IsString()
  @IsNotEmpty()
  @IsBoolean()
  readonly user!: string;

  @IsString()
  @IsNotEmpty()
  @IsBoolean()
  readonly password!: string;

  @IsString()
  @IsNotEmpty()
  @IsBoolean()
  readonly name!: string;

  @IsDate()
  @IsOptional()
  @IsBoolean()
  readonly birtyDate?: Date;

  @IsBoolean()
  @IsNotEmpty()
  @IsBoolean()
  readonly permissions!: boolean;
}
