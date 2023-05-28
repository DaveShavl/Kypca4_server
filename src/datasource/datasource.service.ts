import { Injectable } from '@nestjs/common';
import { Repair } from 'src/repair/entities/repair.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Car } from 'src/cars/entities/cars.entity';

@Injectable()
export class DatasourceService {
  private repairs:   Repair[]   = [];
  private cars:      Car[]      = [];
  private customers: Customer[] = [];


  getRepairs(): Repair[] {
    return this.repairs;
  }

  setRepairs(repairs: Repair[]): void {
    this.repairs = repairs;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  setCustomers(customers: Customer[]): void {
    this.customers = customers;
  }

  getCars(): Car[] {
    return this.cars;
  }

  setCars(cars: Car[]): void {
    this.cars = cars;
  }
}