import { Column, CreatedAt, DataType, Default, ForeignKey, Is, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Product } from '@modules/product/entities/product.entity';
import { User } from '../../user/entities/user.entity';

@Table({
  timestamps: true,
  tableName: 'reviews',
})
export class Review extends Model {
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  body: string;

  @Default(0)
  @Is('In range 0-5', (value) => {
    if (!(value >= 0 && value <= 5)) throw new Error('Value must be in range 0-5');
  })
  @Column({
    type: DataType.TINYINT,
  })
  rating: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUIDV4,
  })
  user_id: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUIDV4,
  })
  product_id;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
