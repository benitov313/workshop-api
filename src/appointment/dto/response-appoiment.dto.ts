import { CarResponse } from 'src/micro-service/dto/car.response.dto';
import { UserResponse } from 'src/micro-service/dto/user.response.dto';
import { Mechanical } from 'src/persistence';

export class ResponseAppointmentDto {
  userId: string;

  carId: number;

  details: string;

  departureDate: Date;

  user: UserResponse;

  car: CarResponse;

  mechanic: Mechanical;
}
