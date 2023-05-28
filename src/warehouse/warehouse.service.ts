import { Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Warehouse } from "./entities/warehouse.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CreateWarehouseDto } from "src/dto/WarehouseDTO";

@Injectable()
export class WarehouseService {
  constructor(private readonly datasourceService: DatasourceService,
    
              @InjectRepository(Warehouse)
              private readonly warehouseRepasitory: Repository<Warehouse>) {}

  
  async create(warehouseDto: CreateWarehouseDto): Promise<Warehouse>
  {
      const warehouse = this.warehouseRepasitory.create(); //создаем объект Author из репозитория
      warehouse.name = warehouseDto.name;
      warehouse.count = warehouseDto.count;
      await this.warehouseRepasitory.save(warehouse); //сохраняем объект Author в БД
      return warehouse; //возвращаем объект Author
    }
             
    async findAll(): Promise<Warehouse[]> {
      const warehouse = await this.warehouseRepasitory.find({
        relations: {
        }
      });
      return warehouse; 
    }

    findOne(id: number): Promise<Warehouse> {
      return this.warehouseRepasitory.findOne({
        //получаем объект Author по id
        where: { id }, //указываем условие поиска по id
        relations: { }, //получаем связанные объекты
      });
    }

    async update(id: number, updatedWarehouse: Warehouse) {
      const warehouse = await this.warehouseRepasitory.findOne({ where: { id } }); //получаем объект Author по id из БД
      warehouse.name = updatedWarehouse.name;
      warehouse.count = updatedWarehouse.count;
      await this.warehouseRepasitory.save(warehouse); //сохраняем объект  в БД
      return warehouse; //возвращаем объект 
    }

    remove(id: number) {
      this.warehouseRepasitory.delete({ id }); //удаляем объект Author из БД
    }
  
}
