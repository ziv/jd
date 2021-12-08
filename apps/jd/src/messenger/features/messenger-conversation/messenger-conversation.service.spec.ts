import { TestBed } from '@angular/core/testing';

import { MessengerConversationService } from './messenger-conversation.service';

describe('MessengerConversationService', () => {
  let service: MessengerConversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerConversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
