import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/authentication';
//PARA LLAMAR JAVASCRIPT/////
declare let alertify: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSubmitting = false;

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')!;
  }

  // login() {

  //   this.authService.login(this.username.value, this.password.value, this.rememberMe.value).subscribe(
  //     result => {

  //     },
  //     err => {
  //       console.log('mal');
  //     }
  //   );
  // }
  login() {
    if (this.username.value == 'MACROECONOMIA' && this.password.value == 'UMSA') {
      this.isSubmitting = true;

      this.auth
        .login(this.username.value, this.password.value, this.rememberMe.value)
        .pipe(filter(authenticated => authenticated))
        .subscribe(
          () => this.router.navigateByUrl('/'),
          (errorRes: HttpErrorResponse) => {
            if (errorRes.status === 422) {
              const form = this.loginForm;
              const errors = errorRes.error.errors;
              Object.keys(errors).forEach(key => {
                form.get(key === 'email' ? 'username' : key)?.setErrors({
                  remote: errors[key][0],
                });
              });
            }
            this.isSubmitting = false;
          }
        );
    } else {
      console.log('no coiciden la contraseña');
      alertify.error('El usuario o la contraseña es incorrecta');
    }
  }
}
