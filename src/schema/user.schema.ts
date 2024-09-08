import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Room } from './room.schema';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
import * as mongoose from 'mongoose';

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop({
    unique: true,
  })
  socket_id: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }] })
  rooms: Room[];
}
export const UserSchema = SchemaFactory.createForClass(User);
