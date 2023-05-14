import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'p_name',
    type: 'text',
    unique: true,
  })
  name: string;

  @Column({
    name: 'p_description',
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    name: 'p_price',
    type: 'numeric',
    default: 0.0,
    nullable: true,
  })
  price?: number;

  @Column({
    name: 'p_stock',
    type: 'int',
    width: 10,
    default: 0,
    nullable: true,
  })
  stock?: number;

  @Column({
    name: 'p_image',
    type: 'text',
    nullable: true,
  })
  image?: string;
  //category: string;

  @Column({
    name: 'p_tags',
    type: 'text',
    array: true,
    nullable: true,
  })
  tags?: string[];

  @Column({
    name: 'p_is_active',
    type: 'bool',
    default: true,
  })
  isActive: boolean;
}
