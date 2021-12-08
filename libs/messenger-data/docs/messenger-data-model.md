# Messenger Data Model

## Identifier

```typescript
type DocumentID = string;
```

## Users

### User

- user id (uuid)

## Conversations

```typescript
interface Message {
  id: DocumentID;
  created_by: User;
  created_at: Date;
  content: string;
  replayTo?: DocumentID;
}
```

### Conversation

- conversation id (uuid)
- created by (User.id)
- created at (Date)
- participants (Participant[])
- messages ()

### Participant

- user (User.id)
- joined at (Date)

### Message

- message id (uuid)
- user (User.id)
- content (String)
- reply to (Message.id) ?
