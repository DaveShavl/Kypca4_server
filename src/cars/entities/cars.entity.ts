import { Customer } from "src/customer/entities/customer.entity";
import { Repair } from "src/repair/entities/repair.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars')
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Customer, (customer) => (customer.id))
    @JoinTable({ name: 'cars_owners' })
    ownerId: number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    vin: string;

    @Column()
    mileage: number;

    @Column()
    status: string;

    @OneToMany(() => Repair, repair => repair.car)
    @JoinColumn()
    repairs: Repair[];
}
