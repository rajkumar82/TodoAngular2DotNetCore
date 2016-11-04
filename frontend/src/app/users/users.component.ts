import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  Users: Array<string> = new Array<string>();
  constructor(private route: ActivatedRoute,
        private router: Router,
        private usersservice: UsersService) { }

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

  rowClick(user: string) {
      this.router.navigate(['/todo/' + user]);
  }

}
