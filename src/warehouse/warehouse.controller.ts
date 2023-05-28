import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Warehouse } from './entities/warehouse.entity';
import { WarehouseService } from 'src/warehouse/warehouse.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateWarehouseDto } from 'src/dto/WarehouseDTO';

@ApiTags('Склад')
@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  @Get()
  findAll() {
    return this.warehouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseService.findOne(Number(id));
  }


  @ApiOperation({ summary: 'Добавление новой запчасти' })
  @Post()
  create(@Body() warehouse: CreateWarehouseDto) {
    return this.warehouseService.create(warehouse);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() warehouse: Warehouse) {
    return this.warehouseService.update(Number(id), warehouse);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.warehouseService.remove(Number(id));
  }
}
