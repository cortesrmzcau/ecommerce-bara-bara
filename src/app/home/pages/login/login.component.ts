import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formLogin: FormGroup;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
    this.formLogin = this.formUser();
  }

  ngOnInit(): void {
  }

  get userEmail() { return this.formLogin.get('userEmail') }
  get userPassword() { return this.formLogin.get('userPassword') }

  formUser() {
    return new FormGroup({
      userEmail: new FormControl('cesar-customer@gmail.com', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
      userPassword: new FormControl('customer123', [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
    });
  }

  login() {
    if(this.formLogin.valid) {
      this._authService.loginAndGet(
        this.formLogin.value.userEmail,
        this.formLogin.value.userPassword
      )
      .subscribe (res => {
        switch (res.role) {
          case 'admin':
            this._router.navigate(['/admin']);
            break;

          case 'customer':
            this._router.navigate(['/home']);
            break;
        }
      });
    }
  }
}
