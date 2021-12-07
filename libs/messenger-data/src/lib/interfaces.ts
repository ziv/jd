import { ObjectId } from 'mongodb';
import { User } from '@xprjs/user-data';

export interface Message {
  _id: ObjectId;
  id: string;
  content: string;
  createdBy: User;
  createdAt: Date;
  replyTo?: Message;
}

export interface Participant {
  user: User;
  joinedAt: Date;
}

export interface Conversation {
  _id: ObjectId;
  id: string;
  createdBy: User;
  createdAt: Date;
  messages: Message[];
  participants: Participant[];
  events: string[];
}
