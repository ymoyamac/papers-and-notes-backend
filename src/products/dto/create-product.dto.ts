import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags?: string[];

  isActive: boolean;
}
