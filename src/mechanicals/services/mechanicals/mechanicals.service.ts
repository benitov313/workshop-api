import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataBasesEnum } from 'src/enum/data-bases.enum';
import { CreateMechanicalDto } from 'src/mechanicals/dto/mechanicals.dtos';
import { Mechanical } from 'src/persistence/mechanical.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MechanicalsService {
  constructor(
    @InjectRepository(Mechanical)
    private readonly mechanicalRepository: Repository<Mechanical>,
  ) {}

  createUser(createMechanicalDto: CreateMechanicalDto) {
    const newUser = this.mechanicalRepository.create(createMechanicalDto);
    return this.mechanicalRepository.save(newUser);
  }

  findUsersById(id: number) {
    return this.mechanicalRepository.findOne({ where: { id } });
  }

  findAll() {
    return this.mechanicalRepository.find();
  }
}
