import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params }       from '@angular/router';
import { TodoService } from '../services/todo.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Task } from '../common/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public Username: string;


  public get Backlog(): Array<Task>{
    return this.todoservice.GetBacklog(this.Username);
  }

  public get Progress(): Array<Task>{
    return this.todoservice.GetProgress(this.Username);
  }

  public get Completed(): Array<Task>{
    return this.todoservice.GetDone(this.Username);
  }


  backlog: Array<Task>;
  progress: Array<Task>;
  completed: Array<Task>;

  constructor(private route: ActivatedRoute,
        private router: Router,
        private todoservice: TodoService,
        private dragulaService: DragulaService) {

          // configure dragule service here

            dragulaService.setOptions('bag', {
              removeOnSpill: false
            });

          dragulaService.drag.subscribe((value) => {
          console.log(`drag: ${value[0]}`);
          this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe((value) => {
          console.log(`drop: ${value[0]}`);
          this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe((value) => {
          console.log(`over: ${value[0]}`);
          this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe((value) => {
          console.log(`out: ${value[0]}`);
          this.onOut(value.slice(1));
        });

         }

  ngOnInit() {
    // this.Username = 'Rajkumar';

     this.route.params.forEach((params: Params) => {
     let user = params['user'];
     this.Username = user;

     // configure todo service
      this.backlog = this.todoservice.GetBacklog(this.Username);
      this.progress = this.todoservice.GetProgress(this.Username);
      this.completed = this.todoservice.GetDone(this.Username);

   });

  }

  ngOnDestroy() {
      this.dragulaService.destroy('bag');
  }

  GetTasksForUser(user: string) {
    // going to get the tasks for a user
  }

  GoHome() {
    this.router.navigate(['/users']);
  }

  AddTask() {
    // going to add a task
  }

  EditTask() {
  // going to edit a task description
  }

  ReorderTask() {
    // re-arrange task  
  }

  MoveTaskToProgress() {
    // move a task from backlog to progress
  }

  MoveTaskToDone() {
    // move a task from progress to done
  }


  private onDrag(args) {
    let [e, el] = args;
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something    
    console.log('' + this.backlog.length);
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }



}
