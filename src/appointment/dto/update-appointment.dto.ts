import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { StatusEnum } from "src/enum/appointment-status.enum";

export class UpdateAppointmentDto {
    

    @IsString({ message: 'userId be a string.' })
    @IsOptional()
    userId: string;

   
    @IsString({ message: 'carId must be a string.' })
    @IsOptional()
    carId: string;

    @IsString({ message: 'mechanicalId must be a string.' })
    @IsOptional()
    mechanicalId: string;

    @IsString({ message: 'detail must be a string.' })
    @IsOptional()
    details: string;
   
    @IsOptional()
    departureDate: Date;
    
    @IsEnum(
        [
            StatusEnum.PENDING,
            StatusEnum.CANCELLED,
            StatusEnum.DONE
        ],
        {
          each: true,
          message: 'status entered is not available.',
        },
      )
    status: StatusEnum;
}
