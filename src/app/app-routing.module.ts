import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ConfigComponent } from './config/config.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'config',
    component: ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
