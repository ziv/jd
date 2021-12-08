import { Component, OnInit } from '@angular/core';
import { Conversation, createConversation } from '@xprjs/messenger-data';
import { User } from '@xprjs/user-data';
import { MessengerConversationService } from './messenger-conversation.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jd-messenger-conversation',
  templateUrl: './messenger-conversation.component.html',
  styleUrls: ['./messenger-conversation.component.scss'],
})
export class MessengerConversationComponent implements OnInit {
  conversation$: Observable<Conversation> = this.service.fetch();
  messages$ = this.conversation$.pipe(map((c) => c.messages));
  constructor(public readonly service: MessengerConversationService) {}

  ngOnInit() {
    console.log('MessengerConversationComponent:init');
  }
}
