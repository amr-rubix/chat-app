import { Document } from 'mongoose';
import { IRoom } from './room.interface';
import { IUser } from './user.interface';
export interface IMessage extends Document {
  readonly text: string;
  readonly from: IUser;
  readonly to: IUser;
  readonly room: IRoom;
}
