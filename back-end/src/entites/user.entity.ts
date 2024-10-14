import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: false})
    nome: string;
  
    @Column({nullable: false})
    email: string;
  
    @Column({ length: 20, nullable: false})
    telefone: string;
  
    @Column({length: 1, nullable: false})
    sexo: string;
  
    @Column({type: 'date', nullable: false})
    data_nascimento: Date;
  
    @Column({ unique: true, length: 11, nullable: false})
    cpf: string;
  
    @Column({nullable: false})
    senha: string;
}