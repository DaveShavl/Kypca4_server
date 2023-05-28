import { Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Customer } from "./entities/customer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CreateCustomerDto } from "src/dto/CustomerDTO";

@Injectable()
export class CustomerService {
  constructor(private readonly datasourceService: DatasourceService,
    
              @InjectRepository(Customer)
              private readonly customerRepasitory: Repository<Customer>) {}

  
  async create(customerDto: CreateCustomerDto): Promise<Customer>
  {
      const customer = this.customerRepasitory.create(); //создаем объект Author из репозитория
      customer.firstName = customerDto.firstName;
      customer.lastName = customerDto.lastName;
      customer.phoneNumber = customerDto.phoneNumber;
      customer.email = customerDto.email;
      
      await this.customerRepasitory.save(customer); //сохраняем объект Author в БД
      return customer; //возвращаем объект Author
    }
             
    async findAll(): Promise<Customer[]> {
      const customers = await this.customerRepasitory.find({
        relations: {
        }
      });
      return customers; 
    }

    findOne(id: number): Promise<Customer> {
      return this.customerRepasitory.findOne({
        //получаем объект Author по id
        where: { id }, //указываем условие поиска по id
        relations: { }, //получаем связанные объекты
      });
    }

    async update(id: number, updatedCustomer: Customer) {
      const customer = await this.customerRepasitory.findOne({ where: { id } }); //получаем объект Author по id из БД
      customer.firstName = updatedCustomer.firstName;
      customer.lastName = updatedCustomer.lastName;
      customer.phoneNumber = updatedCustomer.phoneNumber;
      customer.email = updatedCustomer.email;
      await this.customerRepasitory.save(customer); //сохраняем объект  в БД
      return customer; //возвращаем объект 
    }

    remove(id: number) {
      this.customerRepasitory.delete({ id }); //удаляем объект Author из БД
    }
  
}
