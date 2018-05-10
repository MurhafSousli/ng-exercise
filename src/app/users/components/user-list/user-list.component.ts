import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RandomUserService } from '../../service/random-user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private _users: RandomUserService) { }

  ngOnInit() {
    this.users$ = this._users.getUsers();
  }

}
