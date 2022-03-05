import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Rental extends Document {
  @Prop({ required: true })
  fromDate: Date;

  @Prop({ required: true })
  toDate: Date;

  @Prop({ default: 1, required: true })
  status: number;

  @Prop({ required: true, min: 1 })
  rentCost: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Book', required: true })
  book: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);
