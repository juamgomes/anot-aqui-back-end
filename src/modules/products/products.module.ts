import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as schema from 'src/database/allSchemas/products.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: schema.Product.name,
      schema: schema.ProductSchema,
    },
    {
      name: schema.Categories.name,
      schema: schema.CategoriesSchema,
    },
    {
      name: schema.Image.name,
      schema: schema.ImageSchema,
    },
    {
      name: schema.NutritionalInfo.name,
      schema: schema.NutritionalInfoSchema,
    }
  ])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
