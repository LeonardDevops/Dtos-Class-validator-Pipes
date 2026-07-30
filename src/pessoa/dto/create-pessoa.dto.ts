import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  @IsNotEmpty()
  readonly user!: string;

  @IsString()
  @IsNotEmpty()
  readonly password!: string;

  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsDate()
  @IsOptional()
  readonly birtyDate?: Date;

  @IsBoolean()
  @IsNotEmpty()
  readonly permissions!: boolean;
}
