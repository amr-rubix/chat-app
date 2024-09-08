import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRoom } from 'src/interface/room.interface';
import { CreateRoomDto } from 'src/dto/create-room.dto';
@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private roomModel: Model<IRoom>) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<IRoom> {
    const newURoom = await new this.roomModel(createRoomDto);
    return newURoom.save();
  }

  async getAllRooms(): Promise<IRoom[]> {
    const rooms = await this.roomModel.find().populate('users');
    if (!rooms || rooms.length == 0) {
      throw new NotFoundException('Rooms data not found!');
    }
    return rooms;
  }
}
