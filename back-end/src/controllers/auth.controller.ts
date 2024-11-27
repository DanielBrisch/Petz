import { Controller, Get, Post, Request, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../DTOs/login.dto';
import { Public } from 'src/public.decorator';
import { UserDto } from 'src/DTOs/user.dto';
import { User } from 'src/entites/user.entity';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/services/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }

  @Public()
  @Post()
  async createUser(@Body() createUserDto: UserDto): Promise<User> {
    const rounds = 10;
    const senhaCriptografada = await bcrypt.hash(
      createUserDto.password,
      rounds,
    );

    const userToSave = {
      ...createUserDto,
      password: senhaCriptografada,
    };

    return this.userService.create(userToSave);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
