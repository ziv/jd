import { Injectable } from '@nestjs/common';
import { Collection, Db } from 'mongodb';
import { Conversation } from '@xprjs/messenger-data';
import { User } from '@xprjs/user-data';

@Injectable()
export class ConversationsService {
  conversations: Collection<Conversation>;

  constructor(public readonly db: Db) {
    this.conversations = db.collection('conversations');
  }

  getConversations(user: User, page: number) {
    return { user, page };
  }
}
