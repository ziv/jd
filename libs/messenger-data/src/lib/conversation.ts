import { User } from '@xprjs/user-data';
import { Message, Participant } from './interfaces';
import { ConversationCreated, ConversationEvents } from './conversation-events';

export class Conversation {
  createdBy?: User;
  createdAt?: Date;
  messages?: Message[];
  participants?: Participant[];
  events?: ConversationEvents[];
}

export function createConversation(user: User): Conversation {
  const now = new Date();
  return {
    createdBy: user,
    createdAt: now,
    messages: [],
    participants: [{ user, joinedAt: now }],
    events: [
      { createdBy: user, createdAt: now, event: 'ConversationCreated' },
      {
        createdBy: user,
        createdAt: now,
        event: 'UserJoinedConversation',
        joinedUser: user,
      },
    ],
  };
}
