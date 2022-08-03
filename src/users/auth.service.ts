import { promisify } from 'util';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private UserService: UsersService) {}

  async signup(email: string, password: string) {
    //check if the email is in use
    const users = await this.UserService.find(email);
    if (users.length)
      // if  yes, return error
      throw new BadRequestException(
        'Account with the email address already exist',
      );
    const salt = randomBytes(16).toString('hex');
    //hash the password
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    // I always try to reduce the use of third-party libraries
    const result = `${salt}.${hash.toString('hex')}`;
    //create a new user and save it
    const user = await this.UserService.createUser(email, result);
    return user;
  }

  async signin(email: string, password: string) {
    //Login function
    if (!email || !password)
      throw new BadRequestException('invalid credentials');
    const [user] = await this.UserService.find(email);
    if (!user) throw new NotFoundException('invalid credentials');
  }
}
