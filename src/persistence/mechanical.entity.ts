import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@Entity('mechanical')
@ObjectType()
export class Mechanical {
  @PrimaryGeneratedColumn('uuid', {
    name: 'mechanic_id',
  })
  @Field()
  mechanicId: string;

  @Column({
    name: 'full_name',
    nullable: false,
    default: '',
  })
  @Field()
  fullName: string;

  @Column({
    name: 'phone_address',
    nullable: false,
    default: '',
  })
  @Field()
  phone: string;

  @Column({
    name: 'dni',
    nullable: false,
    default: '',
  })
  @Field()
  dni: string;

  @OneToMany(() => Appointment, (appointment) => appointment.mechanic)
  appointment: Appointment[];
}
