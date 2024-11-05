import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { User } from 'src/entites/user.entity';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('count-users')
  async countUsers(): Promise<number> {
    return await this.userService.countUsers();
  }

  @Get('find-all')
  async findAll(): Promise<User[]> {
    const usersList = await this.userService.findAll();
    if (!usersList) {
      throw new NotFoundException(`No users found`);
    }
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  @Put('inactivate')
  async inactivateById(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userService.inactivateById(id);
  }

  @Delete('id')
  async deleteUser(@Param('id') userId: string) {
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    await this.userService.delete(userId);
  }
}
