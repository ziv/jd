import { Component, OnInit } from '@angular/core';
import { MessengerShellService } from './messenger-shell.service';

@Component({
  selector: 'jd-messenger-shell',
  templateUrl: './messenger-shell.component.html',
  styleUrls: ['./messenger-shell.component.scss'],
})
export class MessengerShellComponent implements OnInit {
  conversations$ = this.service.conversations$.asObservable();

  constructor(private readonly service: MessengerShellService) {}

  ngOnInit() {
    this.service.load();
  }
}
