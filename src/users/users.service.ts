import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async createUser(user: CreateUserDto) {
    const userFound = await this.repository.findOne({
      where: {
        username: user.username,
      },
    });

    if (userFound) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const newUser = this.repository.create(user);
    return this.repository.save(newUser);
  }

  getUsers() {
    return this.repository.find();
  }

  async getUser(id: number) {
    const userFound = await this.repository.findOne({
      where: {
        id, // id: id, == id
      },
    });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userFound;
  }

  async updateUser(id: number, user: UpdateUserDto) {
    const userFound = this.repository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const updateUser = Object.assign(userFound, user);
    return this.repository.save(updateUser);
  }

  async deleteUser(id: number) {
    const result = await this.repository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
