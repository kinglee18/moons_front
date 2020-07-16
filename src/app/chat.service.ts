import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'process';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private socket: Socket) { }


  saveUsername(username): void {
    localStorage.setItem('username', username);
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  sendMessage(text: string) {
    const username = this.getUsername();
    return this.socket.emit("chat", { username, text });
  }

  getMessages(): Observable<any> {
    return this.socket
      .fromEvent("chat");
  }
}
