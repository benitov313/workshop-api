import { StatusEnum } from "src/enum/appointment-status.enum";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mechanical } from "./mechanical.entity";

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn('uuid', {
        name: 'appointment_id'
    })
    id: string;


    @Column({
        name: 'user_id',
        nullable: false,
    })
    userId: string;

    @Column({
        name: 'car_id',
        nullable: false
    })
    carId: string;

    @Column({
        name: 'mechanical_id'
    })
    mechanicalId: string;

    @Column({
        name: 'details',
    })
    details: string;

    @Column({
        name: 'arrival_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP', 
        nullable: false
    })
    arrivalDate: Date;

    @Column({
        name: 'departure_date'
    })
    departureDate: Date;

    @Column({
        name: 'status',
        default: StatusEnum.PENDING
    })
    status: StatusEnum;

    @JoinColumn({ name: 'mechanic_id' })
    @ManyToMany(() => Mechanical, (mechanic) => mechanic.appointment)
    mechanic: Mechanical;
}


