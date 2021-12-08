import { Collection } from 'mongodb';
import { User } from '@xprjs/user-data';
import { Conversation } from './conversation';

export class MessengerData {
  constructor(public readonly conversations: Collection<Conversation>) {}

  createConversation(user: User) {
    // const conversation = new Conversation(user);
  }
}
