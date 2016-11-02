import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public getUsers()
  {
    var url = "http://localhost:5985/api/Users";
      return (<any>this.http.get(url)).map(
            res => res.json()
        );
  }

}
