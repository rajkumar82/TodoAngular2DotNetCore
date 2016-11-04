import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Common} from './common/common';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public getUsers() {
      return (<any>this.http.get(Common.GetAllUsersUrl)).map(
            res => res.json()
        );
  }
}

