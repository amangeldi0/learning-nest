import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role' })
  readonly value: string;

  @ApiProperty({
    example: 'It is admin he have rules like this...',
    description: 'Role describe',
  })
  readonly description: string;
}
