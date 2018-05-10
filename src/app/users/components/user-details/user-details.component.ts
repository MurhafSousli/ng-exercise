import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { User } from '../../models/user.model';
import { RandomUserService } from '../../service/random-user.service';
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';

@Component({
  selector: 'ng-e-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private _route: ActivatedRoute,
    private _users: RandomUserService
  ) {}

  ngOnInit() {
    this.user$ = this._route.params.pipe(
      switchMap((params: Params) => this._users.getUserById(params.id))
    );
  }
}
