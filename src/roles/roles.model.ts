import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreateAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreateAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Unique role meaning' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  value: string;

  @ApiProperty({ example: 'It is admin', description: 'Role description' })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
