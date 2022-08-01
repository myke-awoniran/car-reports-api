import { Body, Controller } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';

import { Post, Get, Patch, Param } from '@nestjs/common';
import { createMessageDto } from 'messages/src/messages/dtos/create-message.dtos';

@Controller('auth')
export class UserController {
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {}
}
