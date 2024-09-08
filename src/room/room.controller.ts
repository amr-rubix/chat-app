import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from 'src/dto/create-room.dto';
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createUser(@Res() response, @Body() createRoomDto: CreateRoomDto) {
    try {
      const newRoom = await this.roomService.createRoom(createRoomDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Room has been created successfully',
        newRoom,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: `Error: Room not created!: ${err.message}`,
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getRooms(@Res() response) {
    try {
      const roomData = await this.roomService.getAllRooms();
      return response.status(HttpStatus.OK).json({
        message: 'All rooms data found successfully',
        roomData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
