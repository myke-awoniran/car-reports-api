import { Body, Controller, Inject } from '@nestjs/common';
import { Post, Get, Patch, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
import { LoginUserDto } from './dtos/login-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UserController {
  constructor(private UsersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return this.UsersService.createUser(body.email, body.password);
  }

  @Post('/login')
  async loginUser(@Body() body: LoginUserDto) {
    //
  }
}
