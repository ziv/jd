import { ObjectId } from 'mongodb';
import { User } from '@xprjs/user-data';
import { createConversation } from './conversation';

export const addSeconds = (date: Date) => (amount: number) => {
  const d = new Date(date);
  d.setSeconds(date.getSeconds() + amount);
  return d;
};

export const createSampleUser = (id: string): User => ({
  id,
  _id: new ObjectId(),
});

export const createSampleMessages = (...u: User[]) => {
  const [u0, u1] = u;
  const messages = [];
  const d = addSeconds(new Date());
  for (let i = 1; i < 100; ++i) {
    messages.push({
      _id: new ObjectId(),
      createdAt: d(i),
      createdBy: i % 2 ? u0 : u1,
      content: `message ${i}`,
    });
  }
  return messages;
};

export const createSampleConversation = () => {
  const u0 = createSampleUser('u0');
  const u1 = createSampleUser('u1');
  const c = createConversation(u0);
  c.messages = createSampleMessages(u0, u1);
  return c;
};

console.log(JSON.stringify(createSampleConversation()));
