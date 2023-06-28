import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/persistence/appointment.entity';
import { Repository } from 'typeorm';
import { AppointmentController } from '../controllers/appointment.controller';

@Injectable()
export class AppointmentService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateAppointmentDto: UpdateAppointmentDto) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Appointment)
    private readonly appoinmentRepository: Repository<Appointment>
    ) {}
  create(createAppointmentDto: CreateAppointmentDto) {
    const newAppointment = this.appoinmentRepository.create(createAppointmentDto);
    return this.appoinmentRepository.save(newAppointment);
  }

  findAll() {
    return this.appoinmentRepository.find();
  }

  findUserById(id: string): Promise<Appointment> {
    const found = this.appoinmentRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Appointment with ID "${id}" not found`);
    }
    return found;
  }

   async updateAppointment(id: string, data: UpdateAppointmentDto): Promise<Appointment> {
    const appointment: Appointment =  await this.findUserById(id);
    this.appoinmentRepository.merge(appointment, data);
    return  await this.appoinmentRepository.save(appointment);
  }

  async deleteAppointment(id: string): Promise<void> {
    const result = await this.appoinmentRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Appointment with ID "${id}" not found`);
    }
  }
}