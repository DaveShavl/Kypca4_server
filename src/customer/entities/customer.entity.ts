import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;
  }