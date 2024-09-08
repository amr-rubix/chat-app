import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';
export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop({
    unique: true,
    required: true,
  })
  name: string;

  @Prop({ default: 0 })
  count: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];
}
export const RoomSchema = SchemaFactory.createForClass(Room);
