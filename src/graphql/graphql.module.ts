import { Module } from '@nestjs/common';
import { GraphQlResolver } from './service/graphql.resolver';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { Mechanical } from 'src/persistence/mechanical.entity';
import { Appointment } from '../persistence/appointment.entity';

@Module({
  imports: [AppointmentModule, Mechanical, Appointment],
  controllers: [],
  providers: [GraphQlResolver],
  exports: [GraphQlResolver],
})
export class GraphqlModule {}
