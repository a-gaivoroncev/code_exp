import { AllowNull, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { USER_ROLES } from '@modules/user/types/types';
import { User } from './user.entity';

@Table({
  timestamps: false,
  tableName: 'roles',
})
export class Role extends Model {
  @Column({
    type: DataType.SMALLINT,
    primaryKey: true,
  })
  id: string;

  @AllowNull(false)
  @Column({
    unique: true,
    type: DataType.ENUM('ADMIN', 'SUPERADMIN', 'USER'),
  })
  name: USER_ROLES;

  @HasMany(() => User)
  user: User;
}
