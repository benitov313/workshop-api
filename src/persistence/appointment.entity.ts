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

@Entity('appointment')
export class Appointment {
  @PrimaryGeneratedColumn('uuid', {
    name: 'appointment_id',
  })
  id: string;

  @Column({
    name: 'user_id',
    nullable: false,
  })
  userId: string;

  @Column({
    name: 'car_id',
    nullable: false,
  })
  carId: string;

  @Column({
    name: 'details',
    nullable: true,
    default: '',
  })
  details: string;

  @Column({
    name: 'arrival_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
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
  status: StatusEnum;

  @JoinColumn({ name: 'mechanic' })
  @ManyToOne(() => Mechanical, (mechanic) => mechanic.appointment)
  mechanic: Mechanical;
}
