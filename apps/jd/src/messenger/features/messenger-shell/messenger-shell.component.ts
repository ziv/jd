import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jd-messenger-shell',
  templateUrl: './messenger-shell.component.html',
  styleUrls: ['./messenger-shell.component.scss']
})
export class MessengerShellComponent implements OnInit {
  conversations: { icon: string, label: string, id: string }[] = [];

  constructor() {
    for (let i = 0; i < 100; ++i) {
      this.conversations.push({
        icon: 'face',
        label: 'any text ' + Math.ceil(Math.random() * 100),
        id: '' + Math.ceil(Math.random() * 100)
      });
    }
  }

  ngOnInit(): void {
  }

}
