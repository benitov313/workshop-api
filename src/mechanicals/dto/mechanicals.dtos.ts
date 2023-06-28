import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateMechanicalDto {
  @IsNotEmpty()
  @MinLength(3)
  fullName: string;

  @IsNotEmpty()
  @MinLength(5)
  phone: string;

  @IsNotEmpty()
  @MinLength(5)
  dni: string;
}
