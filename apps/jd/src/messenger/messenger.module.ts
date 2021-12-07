import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessengerShellComponent, MessengerShellModule } from './features/messenger-shell';
import { MessengerConversationComponent, MessengerConversationModule } from './features/messenger-conversation';

@NgModule({
  imports: [
    MessengerShellModule,
    MessengerConversationModule,
    RouterModule.forChild([
      {
        path: '',
        component: MessengerShellComponent
      },
      {
        path: ':id',
        component: MessengerConversationComponent
      }
    ])
  ]
})
export class MessengerModule { }
