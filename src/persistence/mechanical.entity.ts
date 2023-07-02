import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from './appointment.entity';

@Entity('mechanical')
export class Mechanical {
  @PrimaryGeneratedColumn('uuid', {
    name: 'mechanic_id',
  })
  mechanicId: string;

  @Column({
    name: 'full_name',
    nullable: false,
    default: '',
  })
  fullName: string;

  @Column({
    name: 'phone_address',
    nullable: false,
    default: '',
  })
  phone: string;

  @Column({
    name: 'dni',
    nullable: false,
    default: '',
  })
  dni: string;

  @OneToMany(() => Appointment, (appointment) => appointment.mechanic)
  appointment: Appointment[];
}
