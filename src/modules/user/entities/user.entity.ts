import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  IsEmail,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Role } from './role.entity';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model {
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  id: string;

  @AllowNull(false)
  @Column({
    unique: true,
    type: DataType.STRING,
  })
  username: string;

  @Column({
    type: DataType.STRING,
  })
  avatar_url: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @IsEmail
  @Column({
    type: DataType.DATE,
  })
  birthdate: Date;

  @ForeignKey(() => Role)
  @Column({ type: DataType.SMALLINT })
  role_id: number;

  @BelongsTo(() => Role)
  role: Role;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
