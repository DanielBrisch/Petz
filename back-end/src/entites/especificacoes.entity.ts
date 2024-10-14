import { CoranteEnum } from "src/enum/corante.enum";
import { FaixaEtariaEnum } from "src/enum/faixa_etaria.enum";
import { LinhaENum } from "src/enum/linha.enum";
import { PorteEnum } from "src/enum/porte.enum";
import { SimNaoEnum } from "src/enum/sim_nao.enum";
import { SubTipoEnum } from "src/enum/sub_tipo.enum";
import { TipoAlimentoEnum } from "src/enum/tipo_alimento.enum";
import { TipoPetEnum } from "src/enum/tipo_pet.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('especificacoes')
export class Especificacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  idProduto: number;

  @Column({ type: 'enum', enum: FaixaEtariaEnum, nullable: true })
  idade: FaixaEtariaEnum;

  @Column({ type: 'enum', enum: LinhaENum, nullable: true })
  linha: LinhaENum;

  @Column({ type: 'enum', enum: TipoPetEnum, nullable: true })
  pet: TipoPetEnum;

  @Column({ type: 'enum', name: 'porte_raca', enum: PorteEnum, nullable: true })
  porteRaca: PorteEnum;

  @Column({ type: 'enum', enum: SimNaoEnum, nullable: true })
  transgenico: SimNaoEnum;

  @Column({ type: 'varchar', name: 'formato_alimento', length: 100, nullable: true })
  formatoAlimento: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  raca: string;

  @Column({ type: 'enum', enum: TipoAlimentoEnum, name: 'tipo_alimento', nullable: true })
  tipoAlimento: TipoAlimentoEnum;

  @Column({ type: 'varchar', length: 100, name: 'sabor_principal',nullable: true })
  saborPrincipal: string;

  @Column({ type: 'enum', enum: CoranteEnum, nullable: true })
  corante: CoranteEnum;

  @Column({ type: 'enum', enum: SubTipoEnum, nullable: true })
  tipo: SubTipoEnum;

  @Column({ type: 'varchar', length: 100, name: 'sabor_completo', nullable: true })
  saborCompleto: string;

  @Column({ type: 'varchar', length: 100, name: 'indicacao_veterinaria', nullable: true })
  indicacaoVeterinaria: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  indicacao: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  apresentacao: string;

  @Column({ type: 'varchar', length: 100, name: 'medidas_aproximadas', nullable: true })
  medidasAproximadas: string;
}