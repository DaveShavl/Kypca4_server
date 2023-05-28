import { Module } from '@nestjs/common';
import { CarController } from './cars.controller';
import { CarService } from './cars.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/cars.entity';
import { Repair } from 'src/repair/entities/repair.entity';

@Module({
  controllers: [CarController],
  providers: [CarService],
  imports: [DatasourceModule,
            TypeOrmModule.forFeature([Car, Repair])],
})
export class CarsModule {}
