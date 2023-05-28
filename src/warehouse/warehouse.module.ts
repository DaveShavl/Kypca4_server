import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from './entities/warehouse.entity';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Warehouse])],
})
export class WarehouseModule {}
