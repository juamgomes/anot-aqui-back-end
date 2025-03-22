import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;
}

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;
}

export type OrderItemDocument = OrderItem & Document;

@Schema()
export class OrderItem {
  @Prop({ type: Product, required: true })
  product: Product;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  unitPrice: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop()
  notes: string;
}

export type AddressDocument = Address & Document;

@Schema()
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
}

export type StatusHistoryDocument = StatusHistory & Document;

@Schema()
export class StatusHistory {
  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop()
  note: string;
}

export type DeliveryPersonDocument = DeliveryPerson & Document;

@Schema()
export class DeliveryPerson {
  @Prop({ required: true })
  name: string;
}

export type OrderDocument = Order & Document;

@Schema({ collection: 'orders' })
export class Order {
  @Prop({ required: true })
  orderNumber: string;

  @Prop({ type: Customer, required: true })
  customer: Customer;

  @Prop({ type: [OrderItem], required: true })
  items: OrderItem[];

  @Prop({ type: Address, required: true })
  address: Address;

  @Prop({ required: true })
  subtotal: number;

  @Prop({ required: true })
  deliveryFee: number;

  @Prop({ required: true })
  discount: number;

  @Prop({ required: true })
  total: number;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  paymentStatus: string;

  @Prop({ required: true })
  orderStatus: string;

  @Prop({ type: [StatusHistory], required: true })
  statusHistory: StatusHistory[];

  @Prop({ type: DeliveryPerson })
  deliveryPerson: DeliveryPerson;

  @Prop({ required: true })
  estimatedDeliveryTime: Date;

  @Prop()
  actualDeliveryTime: Date;

  @Prop()
  notes: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}
