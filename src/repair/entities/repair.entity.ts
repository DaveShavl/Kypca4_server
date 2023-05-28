import { Car } from "src/cars/entities/cars.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('repairs')
export class Repair {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Car, car => car.repairs)
    car: Car; 

    @Column()
    clientId: number;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @Column()
    description: string;
    
    @Column()
    works: string;

    @Column()
    cost: number;
  }
  