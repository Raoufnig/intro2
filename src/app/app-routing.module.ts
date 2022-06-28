import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ChatComponent } from './chat/chat.component';
import { Chat1Component } from './chat1/chat1.component';
import { ChatloginComponent } from './chatlogin/chatlogin.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"Chat" , component:ChatComponent},
  {path:"Login" , component:ChatloginComponent},
  {path:"Registration" , component:RegistrationComponent},
  {path:"Ajout" , component:AjoutComponent},
  {path:"liste" , component:Chat1Component},
  {
    path: '**',
    redirectTo: 'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  ChatComponent,
  AjoutComponent, 
  RegistrationComponent,
  Chat1Component
]
