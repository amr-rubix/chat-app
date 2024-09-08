import { IsNotEmpty, IsString } from 'class-validator';
import { IUser } from 'src/interface/user.interface';
export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  readonly count: number;
  users: [IUser];
}
