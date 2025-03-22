import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongodb";

export type UserDocument = User & Document;

@Schema({ collection: 'users' })

export class Address {
    @Prop({ required: true })
    street: string;
  
    @Prop({ required: true })
    number: string;
  
    @Prop()
    complement: string;
  
    @Prop({ required: true })
    neighborhood: string;
  
    @Prop({ required: true })
    city: string;
  
    @Prop({ required: true })
    state: string;
  
    @Prop({ required: true })
    zipCode: string;
  
    @Prop({ default: false })
    isDefault: boolean;
}

export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
  MANAGER = 'manager',
  DELIVERYMAN = 'deliveryman',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [   ], default: [] })
  address: Address[];

  @Prop({ 
    type: String, 
    enum: UserRole, 
    default: UserRole.CUSTOMER 
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);