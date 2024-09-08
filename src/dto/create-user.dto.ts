import { IsNotEmpty, IsString } from 'class-validator';
import { IRoom } from 'src/interface/room.interface';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly socket_id: number;

  rooms: [IRoom];
}
