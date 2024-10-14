import { SubTipoEnum } from "src/enum/sub_tipo.enum";
import { TipoEnum } from "src/enum/tipo.enum";
import { TipoPetEnum } from "src/enum/tipo_pet.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('categoria')
export class Categoria {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: false, enum: TipoPetEnum, name: 'tipo_pet'})
    tipoPet: TipoPetEnum;

    @Column({nullable: false, enum: TipoEnum, name: 'tipo'})
    tipo: TipoEnum

    @Column({ name: 'sub_tipo', enum: SubTipoEnum})
    subTipo: SubTipoEnum
}