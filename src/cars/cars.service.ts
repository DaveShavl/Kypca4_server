import { Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Car } from "src/cars/entities/cars.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CreateCarDto } from "src/dto/CarDTO";
import { Repair } from "src/repair/entities/repair.entity";

@Injectable()
export class CarService {
  constructor(private readonly datasourceService: DatasourceService,
    
              @InjectRepository(Car)
              private readonly carRepasitory: Repository<Car>,
              
              @InjectRepository(Repair)
              private readonly repairRepository: Repository<Repair>) {}

  
  async create(carDto: CreateCarDto): Promise<Car>
  {
      const car = this.carRepasitory.create(); //создаем объект Author из репозитория
      car.ownerId = carDto.ownerId;
      car.make = carDto.make;
      car.model = carDto.model;
      car.year = carDto.year;
      car.vin = carDto.vin;
      car.mileage = carDto.mileage;
      car.status = carDto.status;
      car.repairs = [];
      await this.carRepasitory.save(car); //сохраняем объект Author в БД
      return car; //возвращаем объект Author
    }
             
    async findAll(): Promise<Car[]> {
      const cars = await this.carRepasitory.find({
        relations: {
          repairs: true
        }
      });
      return cars; 
    }

    findOne(id: number): Promise<Car> {
      return this.carRepasitory.findOne({
        //получаем объект Author по id
        where: { id }, //указываем условие поиска по id
        relations: { repairs: true }, //получаем связанные объекты
      });
    }

    async update(id: number, updatedCar: Car) {
      const car = await this.carRepasitory.findOne({ where: { id } }); //получаем объект Author по id из БД
      car.ownerId = updatedCar.ownerId;
      car.make = updatedCar.make;
      car.model = updatedCar.model;
      car.year = updatedCar.year;
      car.vin = updatedCar.vin;
      car.mileage = updatedCar.mileage;
      car.status = updatedCar.status;
      car.repairs = updatedCar.repairs;
      await this.carRepasitory.save(car); //сохраняем объект  в БД
      return car; //возвращаем объект 
    }

    remove(id: number) {
      this.carRepasitory.delete({ id }); //удаляем объект Author из БД
    }
  /*create(repair: Repair): Repair {
    const newRepair = {
      ...repair,
      id: repair.id || this.datasourceService.getRepairs().length + 1
    };
    this.datasourceService.getRepairs().push(newRepair);
    return newRepair;
  }
  

  findAll(): Repair[] {
    return this.datasourceService.getRepairs();
  }

  findOne(id: number): Repair {
    return this.datasourceService.getRepairs().find((repair) => repair.id === id);
  }

  update(id: number, repair: Repair): Repair {
    const index = this.datasourceService
      .getRepairs()
      .findIndex((repair) => repair.id === id);
    this.datasourceService.getRepairs()[index] = repair;
    return repair;
  }

  delete(id: number): void {
    this.datasourceService.setRepairs(this.datasourceService.getRepairs().filter((repair) => repair.id !== id));
  }*/
}
