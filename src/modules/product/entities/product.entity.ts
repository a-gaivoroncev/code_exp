import { Review } from '@modules/review/entities/review.entity';
import { Column, CreatedAt, DataType, Default, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'products',
})
export class Product extends Model {
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
  })
  image_url: string;

  @Default(0)
  @Column({
    type: DataType.NUMBER,
  })
  price: number;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.JSON,
  })
  properties: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  is_hidden: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @HasMany(() => Review)
  review: Review;
}
