import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  place: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  dob: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
