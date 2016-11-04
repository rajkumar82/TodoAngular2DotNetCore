import { Injectable } from '@angular/core';
import { Task } from '../common/task';

@Injectable()
export class TodoService {

  constructor() { }

  GetBacklog(user: string): Array<Task> {
    let tasks = new Array<Task>();

    for (let i = 0; i < 10; i++ ) {

      let task = new Task();
      task.Guid = 'guid' + i;
      task.Description = 'This task should be tracked and completed';
      task.Creationtime = '04-11-2016';
      task.Completiontime = '';
      tasks.push(task);

    }

    return tasks;
  }

  GetProgress(user: string): Array<Task> {
    let tasks = new Array<Task>();

    for (let i = 10; i < 15; i++ ) {

      let task = new Task();
      task.Guid = 'guid' + i;
      task.Description = 'This task should be tracked and completed';
      task.Creationtime = '04-11-2016';
      task.Completiontime = '';
      tasks.push(task);

    }
    return tasks;
  }

  GetDone(user: string): Array<Task> {
    let tasks = new Array<Task>();

    for (let i = 15; i < 25; i++ ) {

      let task = new Task();
      task.Guid = 'guid' + i;
      task.Description = 'This task should be tracked and completed';
      task.Creationtime = '04-11-2016';
      task.Completiontime = '';
      tasks.push(task);

    }
    return tasks;
  }

}
