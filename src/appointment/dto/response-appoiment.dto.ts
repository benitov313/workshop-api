import { UserResponse } from 'src/micro-service/dto/user.response.dto';

export class ResponseAppointmentDto {
  userId: string;

  carId: string;

  mechanicalId: string;

  details: string;

  departureDate: Date;

  user: UserResponse;
}
