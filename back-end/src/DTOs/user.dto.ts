import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entites/user.entity';
import { SexoEnum } from 'src/enum/sexo.enum';
import { IsString, IsNotEmpty, MaxLength, max } from 'class-validator';

export class UserDto extends PartialType(User) {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  readonly phone: string;

  @IsNotEmpty()
  readonly sex: SexoEnum;

  @IsString()
  @IsNotEmpty()
  readonly data_nascimento: Date;

  @IsString()
  @IsNotEmpty()
  readonly cpf: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
