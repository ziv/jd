import { Collection } from 'mongodb';
import { Conversation } from './interfaces';
import { User } from '@xprjs/user-data';

export class MessengerData {
  constructor(public readonly conversations: Collection<Conversation>) {
  }

  fetchConversations(user: User, page: number, size: number) {
    return {user, page, size};
  }
}
