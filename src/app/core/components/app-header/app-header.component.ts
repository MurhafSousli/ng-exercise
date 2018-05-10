import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user.model';
import { Auth } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class AppHeaderComponent {
  constructor(public auth: AuthService) { }
}
