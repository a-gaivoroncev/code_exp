import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'roles',
})
export class Role extends Model {
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
  })
  id: string;

  @AllowNull(false)
  @Column({
    unique: true,
    type: DataType.STRING,
  })
  name: string;
}
