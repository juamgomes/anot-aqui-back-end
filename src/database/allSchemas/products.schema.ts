import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriesDocument = Categories & Document;

@Schema({ collection: 'categories' })

export class Categories {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop({ required: true })
  url: string;

  @Prop({ default: false })
  isMain: boolean;
}

export type NutritionalInfoDocument = NutritionalInfo & Document;

@Schema()
export class NutritionalInfo {
  @Prop()
  calories: number;

  @Prop()
  proteins: number;

  @Prop()
  carbs: number;

  @Prop()
  fats: number;
}

export type ProductDocument = Product & Document;

@Schema({ collection: 'products' })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  promotionalPrice: number;

  @Prop({ type: [Image], default: [] })
  images: Image[];

  @Prop({ type: Categories })
  category: Categories;

  @Prop({ type: [String], default: [] })
  ingredients: string[];

  @Prop({ type: NutritionalInfo })
  nutritionalInfo: NutritionalInfo;

  @Prop()
  preparationTime: number;

  @Prop({ default: true })
  inStock: boolean;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export const CategoriesSchema = SchemaFactory.createForClass(Categories);
export const ImageSchema = SchemaFactory.createForClass(Image);
export const NutritionalInfoSchema = SchemaFactory.createForClass(NutritionalInfo);
