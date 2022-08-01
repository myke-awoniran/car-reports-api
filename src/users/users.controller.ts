import { Body, Controller, Inject } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
import { Post, Get, Patch, Param } from '@nestjs/common';
import { UsersService } from './users.service';
// import { createMessageDto } from 'messages/src/messages/dtos/create-message.dtos';

@Controller('auth')
export class UserController {
  constructor(private UsersService: UsersService) {}
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    console.log(body);
    this.UsersService.createUser(body.email, body.password);
  }
}
