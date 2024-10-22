import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from 'src/DTOs/user.dto';
import { User } from 'src/entites/user.entity';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post('cadastrar')
  async createUser(@Body() createUserDto: UserDto) {
    return await this.userService.create(createUserDto);
  }
}
