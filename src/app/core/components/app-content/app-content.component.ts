import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user.model';
import { Auth } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class AppContentComponent {
  constructor(public auth: AuthService) { }
}
