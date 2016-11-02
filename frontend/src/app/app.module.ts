import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { TodoListComponent } from './todo-list/todo-list.component'

@NgModule({
  declarations: [
    AppComponent,    
    UsersComponent, TodoListComponent
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
