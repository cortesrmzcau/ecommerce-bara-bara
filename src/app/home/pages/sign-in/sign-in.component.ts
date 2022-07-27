import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

import { UserService } from 'src/app/services/user/user.service';
import Validation from './confirm-password.validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignInComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formSigin: FormGroup;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _authService: AuthService
  ) {
    this.formSigin = this.formUser();
  }

  get userName() { return this.formSigin.get('userName') }
  get userEmail() { return this.formSigin.get('userEmail') }
  get userPassword() { return this.formSigin.get('userPassword') }
  get userConfirmPassword() { return this.formSigin.get('userConfirmPassword') }

  ngOnInit(): void {
  }

  formUser() {
    return new FormGroup({
      userName: new FormControl('cesar customer', [Validators.required]),
      userEmail: new FormControl('cesar-customer@gmail.com', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
      userPassword: new FormControl('customer123', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      userConfirmPassword: new FormControl('customer123', [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
    },
    {
      validators: [Validation.match('userPassword', 'userConfirmPassword')]
    });
  }

  mustMatch(password: any, confirmPassword: any) {
    return (formSigin: FormGroup) => {
      const passwordControl = formSigin.controls['userPassword'];
      const confirmPasswordControl = formSigin.controls['userConfirmPassword'];

      if (password.errors && !confirmPassword.errors['Mustmatch']) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        passwordControl.setErrors({ Mustmatch: true });
      } else {
        passwordControl.setErrors(null);
      }
    }
  }

  sigin() {
    if(this.formSigin.valid) {
      this._userService.createUser({
        name: this.formSigin.value.userName,
        email: this.formSigin.value.userEmail,
        password: this.formSigin.value.userPassword,
        role: 'customer'
      })
      .pipe(
        switchMap(
          (res) => this._authService.loginAndGet( res.email, res.password)
        )
      )
      .subscribe(() => {
        this._router.navigate(['/home'])
        this.formSigin.reset();
      })
    }
  }

}
