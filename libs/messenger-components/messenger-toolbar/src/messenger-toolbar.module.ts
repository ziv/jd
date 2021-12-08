import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessengerToolbarComponent } from './messenger-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessengerMenuModule } from '@xprjs/messenger-components/messenger-menu';

@NgModule({
  declarations: [MessengerToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MessengerMenuModule,
  ],
  exports: [MessengerToolbarComponent],
})
export class MessengerToolbarModule {}
