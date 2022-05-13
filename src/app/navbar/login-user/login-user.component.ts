import { Test1Service } from './../../test1.service';
import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  userName?: String | null = 'iks';
  resultText?: String = 'TEXT';

  isTrue = false;
  constructor(
    public auth: AuthenticationService,
    private router: Router,
    public test1: Test1Service
  ) {
    this.resultText = test1.text;
  }

  ngOnInit(): void {
    this.isTrue = this.test1.isTrue;
  }

  logOut() {
    this.auth.logOut().then((result) => {
      this.router.navigate(['/']);
    });
  }

  toggle() {
    this.test1.Toggle();
  }
}
