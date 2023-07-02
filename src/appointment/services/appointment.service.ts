import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/persistence/appointment.entity';
import { Repository } from 'typeorm';
import { MicroService } from 'src/micro-service/services/microservice.service';
import { ResponseAppointmentDto } from '../dto/response-appoiment.dto';
import { UserResponse } from 'src/micro-service/dto/user.response.dto';
import { MechanicalsService } from 'src/mechanicals/services/mechanicals.service';
import { CarResponse } from 'src/micro-service/dto/car.response.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appoinmentRepository: Repository<Appointment>,
    private microService: MicroService,
    private mechanicalsService: MechanicalsService,
  ) {}
  async create(createAppointmentDto: CreateAppointmentDto) {
    const newAppointment =
      this.appoinmentRepository.create(createAppointmentDto);
    return this.appoinmentRepository.save(newAppointment);
  }

  findAll() {
    return this.appoinmentRepository.find();
  }

  async findAppointmentById(id: string) {
    const found = await this.appoinmentRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Appointment with ID "${id}" not found`);
    }
    return found;
  }

  async updateAppointment(id: string, data: UpdateAppointmentDto) {
    const appointment = await this.findAppointmentById(id);
    this.appoinmentRepository.merge(appointment, data);
    return await this.appoinmentRepository.save(appointment);
  }

  async deleteAppointment(id: string): Promise<void> {
    const result = await this.appoinmentRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Appointment with ID "${id}" not found`);
    }
  }

  async getAppointmentResponse(id: string) {
    const appointment: Appointment = await this.findAppointmentById(id);
    const user: UserResponse = await this.microService.getUserById(
      appointment.userId,
    );
    // const car: CarResponse = await this.microService.getCarByiD(
    //   appointment.carId,
    // );
    // const car = this.microService.getCarById(appointment.carId);
    const response: ResponseAppointmentDto = {
      ...appointment,
      user: user,
      // car: car,
    };
    return response;
  }

  async setMechanic(appointmentId: string, mechanicId: string) {
    const mechanic = await this.mechanicalsService.findMechanicById(mechanicId);
    const appointment = await this.findAppointmentById(appointmentId);
    appointment.mechanic = mechanic;
    this.appoinmentRepository.merge(appointment);
    return this.appoinmentRepository.save(appointment);
  }
}
