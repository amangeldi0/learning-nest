import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  email: string;

  @ApiProperty({ example: '12345678', description: 'password' })
  password: string;
}
