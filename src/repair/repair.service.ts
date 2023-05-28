import { Inject, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Repair } from "./entities/repair.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, In, Repository } from "typeorm";
import { CreateRepairDto } from "src/dto/RepairDTO";
import { Car } from "src/cars/entities/cars.entity";

@Injectable()
export class RepairService {
  constructor(private readonly datasourceService: DatasourceService,
    
              @InjectRepository(Repair)
              private readonly repairRepasitory: Repository<Repair>,
              
              @InjectRepository(Car)
              private readonly carRepository: Repository<Car>) {}

  
  async create(repairDto: CreateRepairDto): Promise<Repair>
  {
      const repair = this.repairRepasitory.create(); //создаем объект Author из репозитория
      const carOptions: FindOneOptions<Car> = {
        where: { id: repairDto.car },
      };
      repair.car = await this.carRepository.findOne(carOptions);
      repair.clientId = repairDto.clientId;
      repair.startDate = repairDto.startDate;
      repair.endDate = repairDto.endDate;
      repair.description = repairDto.description;
      repair.works = repairDto.works;
      repair.cost = repairDto.cost;
      await this.repairRepasitory.save(repair); //сохраняем объект Author в БД
      return repair; //возвращаем объект Author
    }
             
    async findAll(): Promise<Repair[]> {
      const repairs = await this.repairRepasitory.find({
        relations: {
        }
      });
      return repairs; 
    }

    findOne(id: number): Promise<Repair> {
      return this.repairRepasitory.findOne({
        //получаем объект Author по id
        where: { id }, //указываем условие поиска по id
        relations: { car: true }, //получаем связанные объекты
      });
    }

    async update(id: number, updatedRepair: Repair) {
      const repair = await this.repairRepasitory.findOne({ where: { id } }); //получаем объект Author по id из БД
      repair.car = updatedRepair.car;
      repair.clientId = updatedRepair.clientId;
      repair.startDate = updatedRepair.startDate;
      repair.endDate = updatedRepair.endDate;
      repair.description = updatedRepair.description;
      repair.works = updatedRepair.works;
      repair.cost = updatedRepair.cost;
      await this.repairRepasitory.save(repair); //сохраняем объект  в БД
      return repair; //возвращаем объект 
    }

    remove(id: number) {
      this.repairRepasitory.delete({ id }); //удаляем объект Author из БД
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
