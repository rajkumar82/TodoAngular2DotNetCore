import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [UsersService, DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
