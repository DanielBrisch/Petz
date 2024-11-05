import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'descricao', type: 'text' })
  descricao: string;

  @Column({ name: 'preco', type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ name: 'estoque', type: 'int' })
  stock: number;

  @Column({ name: 'categoria_id', nullable: false })
  categoryId: number;

  @Column({ name: 'especificacoes_id', nullable: false })
  specificationsId: number;

  @Column({ type: 'date', nullable: true })
  dateValidity: Date;

  @Column({ name: 'imagem' })
  image: string;

  @Column({ name: 'avaliacao', type: 'char', length: 1, nullable: false })
  assessment: number;
}
