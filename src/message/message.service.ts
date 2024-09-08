import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMessage } from 'src/interface/message.interface';
import { CreateMessageDto } from 'src/dto/create-message.dto';
@Injectable()
export class MessageService {
  constructor(@InjectModel('Message') private messageModel: Model<IMessage>) {}

  async createMessage(createMessageDto: CreateMessageDto): Promise<IMessage> {
    const newMessage = await new this.messageModel(createMessageDto).populate([
      'from',
      'to',
      'room',
    ]);
    return newMessage.save();
  }
  async getAllMessages(): Promise<IMessage[]> {
    const messages = await this.messageModel
      .find()
      .populate(['from', 'to', 'room']);
    if (!messages || messages.length === 0) {
      throw new NotFoundException('Messages data not found!');
    }

    return messages;
  }
}
