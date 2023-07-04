import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Mechanical } from '../../persistence';

export class CreateAppointmentDto {
  @IsString({ message: 'userId be a string.' })
  @IsNotEmpty({ message: 'Please provide a userId' })
  userId: string;

  @IsString({ message: 'carId must be a string.' })
  @IsNotEmpty({ message: 'Please provide a carId' })
  carId: number;

  @IsString({ message: 'detail must be a string.' })
  @IsOptional()
  details: string;

  @IsOptional()
  departureDate: Date;

  @IsOptional()
  mechanic: Mechanical;

  // @IsEnum(
  //     [
  //         StatusEnum.PENDING,
  //         StatusEnum.CANCELLED,
  //         StatusEnum.DONE
  //     ],
  //     {
  //       each: true,
  //       message: 'status entered is not available.',
  //     },
  //   )
  // status: StatusEnum;
}
