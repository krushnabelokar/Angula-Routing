import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  ngOnInit(): void {
    if (this.AuthService.isLoggedIn()) {
      this.router.navigate(['dashboard/home']);
    }
  }
  constructor(private AuthService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit() {
    if (this.loginForm.valid) {
      this.AuthService.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['/dashboard/home']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
