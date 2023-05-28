import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {
    @ApiProperty({ example: 1, description: 'Идентификатор автомобиля' })
    id: number;

    @ApiProperty({ example: 2, description: 'Идентификатор клиента / владельца автомобиля' })
    ownerId: number;

    @ApiProperty({ example: "BMW", description: 'Производитель' })
    make: string;

    @ApiProperty({ example: "M5", description: 'Модель автомобиля' })
    model: string;

    @ApiProperty({ example: 2005, description: 'Год производства' })
    year: number;

    @ApiProperty({ example: "WBAAD12080PY12345", description: 'VIN' })
    vin: string;

    @ApiProperty({ example: 20000, description: 'Пробег`' })
    mileage: number;

    @ApiProperty({ example: "Повреждение бампера", description: 'Состояние автомобиля' })
    status: string;

    @ApiProperty({ example: 5, description: 'Идентификатор ремонта автомобиля' })
    repairs: number;
    
  }
  