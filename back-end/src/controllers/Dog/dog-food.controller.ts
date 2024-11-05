import { Controller, Get, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entites/produto.entity';
import { DogFoodService } from 'src/services/Dog/dog-food.service';

@Controller('dog/food')
export class DogFoodController {
  constructor(private dogFoodService: DogFoodService) {}

  @Get('find-all')
  async findAll(): Promise<Product[]> {
    const usersList = await this.dogFoodService.findAll();
    if (!usersList) {
      throw new NotFoundException(`No users found`);
    }
    return await this.dogFoodService.findAll();
  }
}
