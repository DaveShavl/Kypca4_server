import { ApiProperty } from "@nestjs/swagger";

export class CreateWarehouseDto {
    @ApiProperty({ example: 1, description: 'Идентификатор запчасти' })
    id: number;

    @ApiProperty({ example: "Аккумулятор", description: 'Название запчасти' })
    name: string;

    @ApiProperty({ example: 100, description: 'Количество на складе' })
    count: number;

    
  }
  