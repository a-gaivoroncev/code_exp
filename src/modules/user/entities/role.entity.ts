import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';
import { USER_ROLES } from '@modules/user/types/types';

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
}
