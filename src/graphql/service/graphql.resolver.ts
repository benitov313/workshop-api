/* eslint-disable @typescript-eslint/no-empty-function */
import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { MicroService } from '../../micro-service/services/microservice.service';
import { AppointmentService } from 'src/appointment/services/appointment.service';
import { Appointment } from 'src/persistence';

@Resolver()
export class GraphQlResolver {
  constructor(private appointmentService: AppointmentService) {}

  @Query((returns) => [Appointment])
  appointments() {
    return this.appointmentService.findAll();
    // return {
    //   userId: '1c2efc00-1777-4d50-8778-22deb0c3d64f',
    //   carId: '3',
    //   details: 'Details',
    //   departureDate: '2023-06-28',
    //   id: '66414c6f-d0c4-4fe2-8ddf-583c39c46799',
    //   arrivalDate: '2023-07-04T18:58:11.552Z',
    //   status: 'pending',
    //   mechanic: {
    //     fullName: 'Juan Pablo',
    //     phone: '77391597',
    //     dni: '8912178',
    //     mechanicId: '467a64a1-5e87-4ef3-b6d3-9f509b6f4761',
    //   },
    // };
  }
}
