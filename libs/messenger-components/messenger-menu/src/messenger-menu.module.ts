import { NgModule } from '@angular/core';
import { MessengerMenuComponent } from './messenger-menu.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MessengerMenuComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  exports: [MessengerMenuComponent],
})
export class MessengerMenuModule {}
