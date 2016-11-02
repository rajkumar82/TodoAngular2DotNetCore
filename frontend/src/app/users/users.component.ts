import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  Users: Array<string> = new Array<string>();
  constructor(private usersservice: UsersService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let me = this;
    this.usersservice.getUsers().subscribe(
      data => {
          me.Users = data;
      }
    );
  }

  rowClick(event) {
      alert(event);
  }

}
