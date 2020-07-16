import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  username: string;
  model: any = {};
  historyMessages = [];


  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.username = this.chatService.getUsername();
    this.listenMessages();
  }

  sendMessage() {
    this.chatService.sendMessage(this.model.message);
    this.historyMessages.push({ username: this.username, text: this.model.message });
    this.model.message = '';
  }

  listenMessages() {
    this.chatService.getMessages().subscribe(
      data => this.historyMessages.push(data),
      err => console.log(err),
    );
  }
}
