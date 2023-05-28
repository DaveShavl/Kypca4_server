import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Car } from './entities/cars.entity';
import { CarService } from './cars.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCarDto } from 'src/dto/CarDTO';

@ApiTags('Автомобили')
@Controller('cars')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(Number(id));
  }


  @ApiOperation({ summary: 'Добавление автомобиля в базу данных' })
  @Post()
  create(@Body() car: CreateCarDto) {
    return this.carService.create(car);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() car: Car) {
    return this.carService.update(Number(id), car);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.carService.remove(Number(id));
  }
}
