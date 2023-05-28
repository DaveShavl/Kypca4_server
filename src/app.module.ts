import { Module } from '@nestjs/common';
import { RepairModule } from './repair/repair.module';
import { CarsModule } from './cars/cars.module';
import { CustomerModule } from './customer/customer.module';
import { DatasourceModule } from './datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseModule } from './warehouse/warehouse.module';
@Module({
  imports: [ RepairModule, DatasourceModule, CustomerModule, CarsModule, WarehouseModule,
            TypeOrmModule.forRoot({
                type: 'postgres', //тип подключаемой БД
                port: 5432, //порт
                username: 'repairshop', //имя пользователя
                password: '123123123', //пароль
                host: 'localhost', //хост, в нашем случае БД развернута локально
                synchronize: true, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
                logging: 'all', //включим логирование для удобства отслеживания процессов
                autoLoadEntities: true 
            })],
  controllers: [],
  providers: [],
})
export class AppModule {}
