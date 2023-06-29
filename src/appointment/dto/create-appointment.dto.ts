import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { StatusEnum } from "src/enum/appointment-status.enum";

export class CreateAppointmentDto {
    

    @IsString({ message: 'userId be a string.' })
    @IsNotEmpty({ message: 'Please provide a userId' })
    userId: string;

   
    @IsString({ message: 'carId must be a string.' })
    @IsNotEmpty({ message: 'Please provide a carId' })
    carId: string;

    @IsString({ message: 'mechanicalId must be a string.' })
    @IsNotEmpty({ message: 'Please provide a mechanicalId' })
    mechanicalId: string;

    @IsString({ message: 'detail must be a string.' })
    @IsNotEmpty({ message: 'Please provide a detail' })
    @IsOptional()
    details: string;
   
    @IsNotEmpty({ message: 'Please provide a departureDate' })
    @IsOptional()
    departureDate: Date;
    
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
