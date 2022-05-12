import { Component, OnInit } from '@angular/core';

import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  authState,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  User,
} from '@firebase/auth';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthenticationService, private router: Router) {}
  isErrorWindowActive: boolean = false;
  closePopupWindow() {
    this.isErrorWindowActive = false;
  }
  loginByGoogle() {
    console.log('zzzzzzzz');

    const auth = getAuth();
    this.auth.logInGoogle(this.loginSuccess, this.loginError);

    this.loginSuccess();
  }

  loginByFacebook() {
    this.isErrorWindowActive = true;
  }
  loginSuccess() {
    this.router.navigate(['/']);
  }

  loginError() {}

  ngOnInit(): void {}
}
