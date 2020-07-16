import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  model: any = {};
  constructor(private chatService: ChatService, private router: Router) { }

  save() {
    this.chatService.saveUsername(this.model.name);
    this.router.navigate(['']);
  }
}
