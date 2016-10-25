import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users : Array<string> = new Array<string>();
  constructor(private usersservice : UsersService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit()
  {
    var me = this;
    this.usersservice.getUsers().subscribe(
      data => 
      {
          me.Users = data;
      }
    );
  }

  rowClick(event)
  {
      alert(event);
  }

}
