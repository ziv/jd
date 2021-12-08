import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerConversationComponent } from './messenger-conversation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessengerMenuModule } from '@xprjs/messenger-components/messenger-menu';

@NgModule({
  declarations: [MessengerConversationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MessengerMenuModule,
    RouterModule,
  ],
})
export class MessengerConversationModule {}
