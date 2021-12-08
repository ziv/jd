import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { Database } from './providers';
import { ConversationsController } from './controllers/conversations';
import { ConversationsService } from './services/conversations.service';

@Module({
  imports: [ConfigModule.forFeature(config)],
  providers: [Database, ConversationsService],
  controllers: [ConversationsController],
})
export class MessengerApiModule {}
