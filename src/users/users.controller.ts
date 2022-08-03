import { Query } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import { Post, Get, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
import { LoginUserDto } from './dtos/login-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { updateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UserController {
  constructor(
    private UsersService: UsersService,
    private AuthService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return this.AuthService.signup(body.email, body.password);
  }

  @Post('/login')
  async loginUser(@Body() body: LoginUserDto) {
    return body;
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string) {
    return this.UsersService.findOne(parseInt(id));
  }

  @Get('/users')
  async getAllUsers(@Query('email') email: string) {
    return this.UsersService.find(email);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    return this.UsersService.remove(parseInt(id));
  }

  @Patch('/users/:id')
  async updateUser(@Param('id') id: string, @Body() body: updateUserDto) {
    return await this.UsersService.update(parseInt(id), body);
  }
}
