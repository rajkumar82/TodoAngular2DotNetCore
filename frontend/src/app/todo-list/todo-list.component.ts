import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }       from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public Username: string;

  constructor(private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit() {
    // this.Username = 'Rajkumar';

     this.route.params.forEach((params: Params) => {
     let user = params['user'];
     this.Username = user;
     // this.service.getHero(id).then(hero => this.hero = hero);
   });

  }

  GoHome() {
    this.router.navigate(['/users']);
  }

  AddTask(){
    // going to add a task
  }

}
