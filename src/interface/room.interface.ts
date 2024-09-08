import { Document } from 'mongoose';
import { IUser } from './user.interface';
export interface IRoom extends Document {
  readonly name: string;
  readonly count: number;
  readonly users: [IUser];
}
