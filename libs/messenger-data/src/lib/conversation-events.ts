import { User } from '@xprjs/user-data';

export abstract class ConversationEvent {
  event?: string;
  createdAt?: Date;
  createdBy?: User;
}

export class ConversationCreated extends ConversationEvent {
  event = 'ConversationCreated';
}

export class UserJoinedConversation extends ConversationEvent {
  event = 'UserJoinedConversation';
  joinedUser?: User;
}

export class UserLeftConversation extends ConversationEvent {}

export class UserRemovedFromConversation extends ConversationEvent {
  removedUser?: User;
}

export type ConversationEvents =
  | ConversationCreated
  | UserJoinedConversation
  | UserLeftConversation
  | UserRemovedFromConversation;
