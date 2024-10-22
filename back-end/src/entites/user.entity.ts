import { SexoEnum } from 'src/enum/sexo.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  email: string;

  @Column({ length: 20, nullable: false })
  telefone: string;

  @Column({ type: 'enum', enum: SexoEnum, nullable: false })
  sexo: SexoEnum;

  @Column({ type: 'date', nullable: false })
  data_nascimento: Date;

  @Column({ unique: true, length: 11, nullable: false })
  cpf: string;

  @Column({ nullable: false })
  senha: string;
}
