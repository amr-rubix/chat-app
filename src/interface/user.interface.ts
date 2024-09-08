import { Document } from 'mongoose';
import { IRoom } from './room.interface';
export interface IUser extends Document {
  readonly name: string;
  readonly socket_id: string;
  readonly rooms: [IRoom];
}
