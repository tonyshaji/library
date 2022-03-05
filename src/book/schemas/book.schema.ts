import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, maxlength: 6 })
  code: string;

  @Prop({ required: true })
  author: string;

  @Prop({ default: true })
  isUsable: boolean;

  @Prop({ required: true, min: 1 })
  price: number;

  @Prop()
  publisher: string;

  @Prop()
  publishedOn: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
