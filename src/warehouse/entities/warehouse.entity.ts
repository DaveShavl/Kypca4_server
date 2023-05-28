import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('warehouse')
export class Warehouse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    count: number;

    
  }
  