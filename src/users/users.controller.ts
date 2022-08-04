import { Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { Body, Controller } from '@nestjs/common';
import { updateUserDto } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos/create-user.dtos';
import { Post, Get, Patch, Param, Delete, Session } from '@nestjs/common';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('auth')
export class UserController {
  constructor(
    private UsersService: UsersService,
    private AuthService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.AuthService.signup(body.email, body.password);
    session.userId = user.user_id;
  }

  @Post('/login')
  async loginUser(@Body() body: CreateUserDto) {
    return this.AuthService.signin(body.email, body.password);
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

  @Get('/whoami')
  whoAmI(@CurrentUser() user: string) {
    return user;
  }
}
