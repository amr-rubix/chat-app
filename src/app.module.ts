import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { RoomSchema } from './schema/room.schema';
import { RoomService } from './room/room.service';
import { RoomController } from './room/room.controller';
import { MessageSchema } from './schema/message.schema';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'chat-app',
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }]),
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
  controllers: [
    AppController,
    UserController,
    RoomController,
    MessageController,
  ],
  providers: [AppService, UserService, RoomService, MessageService],
})
export class AppModule {}
