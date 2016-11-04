import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './services/users.service';
import { TodoService } from './services/todo.service';
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
    DragulaModule,
    RouterModule.forRoot([
            {
                path: 'users',
                component: UsersComponent
            }, {
                path: 'todo/:user',
                component: TodoListComponent
            }, {
                path: '',
                redirectTo: '/users',
                pathMatch: 'full'
            }
        ], { useHash: true })
  ],
  providers: [UsersService, DragulaService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
