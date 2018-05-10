import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable()
export class AuthService {
  state$ = new BehaviorSubject<Auth>({
    user: null,
    isLoggedIn: false
  });

  login(firstName: string, lastName: string) {
    this.state$.next({
      user: {
        firstName,
        lastName
      },
      isLoggedIn: true
    });
  }

  logout() {
    this.state$.next({
      user: null,
      isLoggedIn: false
    });
  }
}
