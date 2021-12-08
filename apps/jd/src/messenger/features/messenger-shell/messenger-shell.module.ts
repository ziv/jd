import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { MessengerMenuModule } from '@xprjs/messenger-components/messenger-menu';
import { MessengerToolbarModule } from '@xprjs/messenger-components/messenger-toolbar';
import { MessengerShellComponent } from './messenger-shell.component';

@NgModule({
  declarations: [MessengerShellComponent],
  exports: [MessengerShellComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MessengerMenuModule,
    MessengerToolbarModule,
    RouterModule,
  ],
})
export class MessengerShellModule {}
