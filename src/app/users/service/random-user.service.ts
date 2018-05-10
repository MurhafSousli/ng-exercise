import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUserResponse, User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

@Injectable()
export class RandomUserService {
  constructor(private _http: HttpClient) {}

  getUsers(count = 20): Observable<User[]> {
    return this._http
      .get('https://randomuser.me/api/?results=' + count)
      .pipe(map((res: RandomUserResponse) => res.results));
  }

  getUserById(id: string): Observable<User> {
    return this._http
      .get('https://randomuser.me/api/?id=' + id)
      .pipe(
        map((res: RandomUserResponse) => res.results),
        filter((users: User[]) => !!users.length),
        map((users: User[]) => users[0])
      );
  }
}
