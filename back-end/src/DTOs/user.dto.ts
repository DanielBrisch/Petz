import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entites/user.entity';
import { SexoEnum } from 'src/enum/sexo.enum';

export class UserDto extends PartialType(User) {
  readonly nome: string;
  readonly email: string;
  readonly telefone: string;
  readonly sexo: SexoEnum;
  readonly data_nascimento: Date;
  readonly cpf: string;
  readonly senha: string;
}
