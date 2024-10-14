import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('produto')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column({ type: 'int' })
  estoque: number;

  @Column({ name: 'categoria_id', nullable: false })
  categoriaId: number;

  @Column({name: 'especificacoes_id', nullable: false})
  especificacoesId: number

  @Column({ type: 'date', nullable: true })
  dataValidade: Date;

  @Column()
  imagem: string;

  @Column({ type: 'char', length: 1, nullable: false})
  avaliacao: number

}
