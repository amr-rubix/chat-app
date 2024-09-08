import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { IUser } from 'src/interface/user.interface';
import { IRoom } from 'src/interface/room.interface';
export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @IsString()
  @IsNotEmpty()
  readonly from: IUser;

  @IsOptional()
  @IsString()
  readonly to: IUser;

  @IsOptional()
  @IsString()
  readonly room: IRoom;
}
