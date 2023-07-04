import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMechanicalDto } from '../../mechanicals/dto/mechanicals.dtos';
import { Mechanical } from '../../persistence/mechanical.entity';
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

  async findMechanicById(mechanicId: string) {
    return await this.mechanicalRepository.findOneBy({ mechanicId });
  }

  findAll() {
    return this.mechanicalRepository.find();
  }
}
