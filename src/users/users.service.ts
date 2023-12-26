import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  createUser(user: CreateUserDto) {
    const newUser = this.repository.create(user);
    return this.repository.save(newUser);
  }

  getUsers() {
    return this.repository.find();
  }

  getUser(id: number) {
    return this.repository.findOne({
      where: {
        // id: id, == id
        id,
      },
    });
  }

  updateUser(id: number, user: UpdateUserDto) {
    return this.repository.update({ id }, user);
  }

  deleteUser(id: number) {
    return this.repository.delete({ id });
  }
}
