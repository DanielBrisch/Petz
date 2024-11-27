import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogFoodController } from 'src/controllers/Dog/dog-food.controller';
import { Product } from 'src/entites/produto.entity';
import { DogFoodService } from 'src/services/Dog/dog-food.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [DogFoodController],
  providers: [DogFoodService],
  exports: [DogFoodService, TypeOrmModule],
})
export class DogFoodModule {}
