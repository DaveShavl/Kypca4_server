import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
    @ApiProperty({ example: 1, description: 'Идентификатор клиента' })
    id: number;

    @ApiProperty({ example: "Иван", description: 'Имя клиента' })
    firstName: string;
    
    @ApiProperty({ example: "Иванов", description: 'Фамилия клиента' })
    lastName: string;

    @ApiProperty({ example: "+79951231221", description: 'Номер телефона клиента' })
    phoneNumber: string;

    @ApiProperty({ example: "electronnyadres@mail.ru", description: 'Почта клиента' })
    email: string;
  }
  