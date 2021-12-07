import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerConversationComponent } from './messenger-conversation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MessengerConversationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class MessengerConversationModule { }
