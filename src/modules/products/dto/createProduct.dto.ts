import { IsString, IsNumber, IsOptional, IsArray, IsBoolean, IsDate, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Categories, Image, NutritionalInfo } from 'src/database/allSchemas/products.schema';

export class CreateProductDto {
@ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @IsPositive()
  promotionalPrice: number;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  images: Image[];

  @ApiProperty()
  @Type(() => Categories)
  @IsOptional()
  category: Categories;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  ingredients: string[];

  @ApiProperty()
  @Type(() => NutritionalInfo)
  @IsOptional()
  nutritionalInfo: NutritionalInfo;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @IsPositive()
  preparationTime: number;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  inStock: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  tags: string[];

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
