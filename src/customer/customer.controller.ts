import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCustomerDto } from 'src/dto/CustomerDTO';

@ApiTags('Клиенты')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(Number(id));
  }


  @ApiOperation({ summary: 'Добавление нового клиента' })
  @Post()
  create(@Body() customer: CreateCustomerDto) {
    return this.customerService.create(customer);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customer: Customer) {
    return this.customerService.update(Number(id), customer);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.customerService.remove(Number(id));
  }
}
