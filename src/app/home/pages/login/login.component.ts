import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    userEmail: new FormControl('', Validators.email),
    userPassword: new FormControl('', Validators.minLength(6))
  });

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this._router.navigate(['/home']);
  }
}
