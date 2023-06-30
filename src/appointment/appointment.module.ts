import { Module } from '@nestjs/common';
import { AppointmentService } from './services/appointment.service';
import { AppointmentController } from './controllers/appointment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from '../persistence/appointment.entity';
import { MicroServiceModule } from '../micro-service/micro-service.module';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), MicroServiceModule],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
