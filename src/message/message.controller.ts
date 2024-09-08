import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from 'src/dto/create-message.dto';
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createMessage(
    @Res() response,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    try {
      const newMessage =
        await this.messageService.createMessage(createMessageDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Message has been created successfully',
        newMessage,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: `Error: message not created!: ${err.message}`,
        error: 'Bad Request',
      });
    }
  }
  @Get()
  async getUsers(@Res() response) {
    try {
      const messageData = await this.messageService.getAllMessages();
      return response.status(HttpStatus.OK).json({
        message: 'All Messages data found successfully',
        messageData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
