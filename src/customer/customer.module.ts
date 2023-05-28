import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Module({
    controllers: [CustomerController],
    providers: [CustomerService],
    imports: [DatasourceModule,
                TypeOrmModule.forFeature([Customer])],
})
export class CustomerModule { }