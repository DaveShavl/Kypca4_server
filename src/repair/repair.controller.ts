import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Repair } from './entities/repair.entity';
import { RepairService } from './repair.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRepairDto } from 'src/dto/RepairDTO';

@ApiTags('Ремонт')
@Controller('repair')
export class RepairController {
  constructor(private repairService: RepairService) {}

  @Get()
  findAll() {
    return this.repairService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repairService.findOne(Number(id));
  }


  @ApiOperation({ summary: 'Создание нового заказа на ремонт' })
  @Post()
  create(@Body() repair: CreateRepairDto) {
    return this.repairService.create(repair);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() repair: Repair) {
    return this.repairService.update(Number(id), repair);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.repairService.remove(Number(id));
  }
}
