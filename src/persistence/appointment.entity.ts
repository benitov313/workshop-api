import { StatusEnum } from '../enum/appointment-status.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Mechanical } from './mechanical.entity';
import {
  Field,
  GraphQLISODateTime,
  InputType,
  ObjectType,
} from '@nestjs/graphql';

@Entity('appointment')
@ObjectType()
export class Appointment {
  @PrimaryGeneratedColumn('uuid', {
    name: 'appointment_id',
  })
  @Field()
  id: string;

  @Column({
    name: 'user_id',
    nullable: false,
  })
  @Field()
  userId: string;

  @Column({
    name: 'car_id',
    nullable: false,
  })
  @Field()
  carId: number;

  @Column({
    name: 'details',
    nullable: true,
    default: '',
  })
  @Field()
  details: string;

  @Column({
    name: 'arrival_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  // @Field(() => GraphQLISODateTime, { nullable: true })
  arrivalDate: Date;

  @Column({
    name: 'departure_date',
    nullable: true,
  })
  departureDate: Date;

  @Column({
    name: 'status',
    default: StatusEnum.PENDING,
  })
  @Field(() => StatusEnum)
  status: StatusEnum;

  @JoinColumn({ name: 'mechanic' })
  @ManyToOne(() => Mechanical, (mechanic) => mechanic.appointment)
  @Field(() => Mechanical)
  mechanic: Mechanical;
}
