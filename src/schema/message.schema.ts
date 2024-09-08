import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Room } from './room.schema';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
import * as mongoose from 'mongoose';
import { User } from './user.schema';
@Schema()
export class Message {
  @Prop()
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  from: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  })
  to: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: false })
  room: Room;
}
export const MessageSchema = SchemaFactory.createForClass(Message);
