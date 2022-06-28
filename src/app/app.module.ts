import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTelIsjIsiModule } from 'input-tel-isj-isi-3';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ChatComponent } from './chat/chat.component';
import { Chat1Component } from './chat1/chat1.component';
import { ChatloginComponent } from './chatlogin/chatlogin.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ChatComponent,
    Chat1Component,
    ChatloginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
