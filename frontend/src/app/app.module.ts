import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { UsersComponent } from './users/users.component';

import { UsersService } from './users.service'

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
