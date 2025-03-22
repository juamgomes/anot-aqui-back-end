import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as products from 'src/database/allSchemas/products.schema';
import { CreateProductDto } from './dto/createProduct.dto';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(products.Product.name) private productModel: Model<products.Product>,
        @InjectModel(products.Categories.name) private categoriesModel: Model<products.Categories>,
        @InjectModel(products.Image.name) private imageModel: Model<products.Image>,
        @InjectModel(products.NutritionalInfo.name) private nutritionalInfoModel: Model<products.NutritionalInfo>,
    ) {}

    async createProduct(product: CreateProductDto) {
        const newProduct = new this.productModel(product);
        return newProduct.save();
    }
}
