import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async createUser(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  async findOne(id) {
    return this.repo.findOneBy({ id });
  }

  async find(email) {
    const users = await this.repo.findBy({ email });
    return users;
  }

  async update(id, attrs: Partial<User>) {
    const user = await this.repo.findOne(id);
    if (!user)
      throw new NotFoundException('no user found with the provided id');
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id) {
    const user = await this.repo.findOne(id);
    if (!user) throw new NotFoundException('no use found with the provided id');
    return await this.repo.remove(user);
  }
}
