import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataBasesEnum } from 'src/enum/data-bases.enum';
import { User } from 'src/persistence';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
