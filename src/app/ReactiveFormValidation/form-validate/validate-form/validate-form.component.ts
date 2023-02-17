import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css'],
})
export class ValidateFormComponent {
  ngOnInit() {}

  /* Validating Form 
    1) Field Should not be empty  - Validator.required
    2) Field Min/Max length - Validator.minLength(5), Validator.maxLength(10)
    3) Should have valid email : Validator.email
  
  
  */
  loginForm = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('[A-Z][a-zA-Z ]*'), // Krushna
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('[A-Z][a-zA-Z ]*'), // Belokar
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z0-9.]*[@][a-z]*[.][a-z]{2,3}'), //krushna.imriel@gmail.com
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern('[A-Z][a-z@$]*[1-9]{3,5}'), // Krushna@123, Pravin$12345  8 letters should be there
    ]),
  });

  get fname() {
    return this.loginForm.get('fname');
  }
  get lname() {
    return this.loginForm.get('lname');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get pass() {
    return this.loginForm.get('pass');
  }

  handleSubmit(data: any) {
    alert(data.fname + '-' + data.lname + '-' + data.email + '-' + data.pass);
    this.loginForm.reset();
  }
}
