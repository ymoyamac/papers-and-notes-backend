import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductImage } from './product-image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'float',
    default: 0,
    nullable: true,
  })
  price?: number;

  @Column({
    type: 'int',
    width: 10,
    default: 0,
    nullable: true,
  })
  stock?: number;

  //category: string;

  @Column({
    type: 'text',
    array: true,
    nullable: true,
  })
  tags?: string[];

  @Column({
    type: 'bool',
    default: true,
  })
  isActive: boolean;

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];
}
