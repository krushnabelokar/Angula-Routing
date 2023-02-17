import { AuthService } from './../../../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private auth: AuthService) {}

  logOut() {
    this.auth.logout();
  }
}
