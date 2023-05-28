import { Module } from '@nestjs/common';
import { RepairController } from './repair.controller';
import { RepairService } from './repair.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repair } from './entities/repair.entity';
import { Car } from 'src/cars/entities/cars.entity';

@Module({
  controllers: [RepairController],
  providers: [RepairService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Repair, Car])],
})
export class RepairModule {}
