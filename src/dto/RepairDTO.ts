import { ApiProperty } from "@nestjs/swagger";

export class CreateRepairDto {
    @ApiProperty({ example: 1, description: 'Идентификатор ремонта' })
    id: number;
    @ApiProperty({ example: 2, description: 'Идентификатор машины' })
    car: number;
    @ApiProperty({ example: 3, description: 'Идентификатор клиента' })
    clientId: number;
    @ApiProperty({ example: "01/01/1970", description: 'Сдача автомобиля в сервис' })
    startDate: string;
    @ApiProperty({ example: '01/10/1970', description: 'Окончание ремонта автомобиля' })
    endDate: string;
    @ApiProperty({ example: 'Замена бензонасоса, свечей, аккумулятора', description: 'Характер работ' })
    description: string;
    @ApiProperty({ example: 'Бензонасос, свечи, аккумулятор', description: 'Необходимый перечень запчастей' })
    works: string;
    @ApiProperty({ example: 20000, description: 'Стоимость проведенного техобслуживания' })
    cost: number;
  }
  