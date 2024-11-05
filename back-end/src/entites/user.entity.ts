import { SexoEnum } from 'src/enum/sexo.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'nome', nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ name: 'telefone', length: 20, nullable: false })
  phone: string;

  @Column({ name: 'sexo', type: 'enum', enum: SexoEnum, nullable: false })
  sex: SexoEnum;

  @Column({ name: 'data_nascimento', type: 'date', nullable: false })
  birth: Date;

  @Column({ unique: true, length: 11, nullable: false })
  cpf: string;

  @Column({ name: 'senha', nullable: false })
  password: string;

  @Column({ name: 'ativo', nullable: false })
  activate: number;
}
