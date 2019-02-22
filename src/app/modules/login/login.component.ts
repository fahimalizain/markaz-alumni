import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'services/auth.service';
import User from 'models/User';
import { Router } from '@angular/router';
import FacebookService from 'services/facebook.service';
import GoogleService from 'services/google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formError: string;

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private googleService: GoogleService,
    private facebookService: FacebookService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    // error should be shown on screen already
    if (!this.loginForm.valid) { return; }
    this.formError = '';
    const r = await this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    if (typeof r === 'string') { // error string
      switch (r) {
        case 'user_not_found':
          this.formError = 'User do not exist';
          break;
        case 'wrong_credentials':
          this.formError = 'Invalid Password';
          break;
      }
    } else if (User.isUser(r)) {
      // success, route back home
      this.onSuccessfulLogin(r);
    }
  }

  googleLogin() {
    this.googleService.login().then((r) => {
      if (User.isUser(r)) {
        this.onSuccessfulLogin(r);
      }
    });
  }

  facebookLogin() {
    this.facebookService.login().then((r) => {
      if (User.isUser(r)) {
        this.onSuccessfulLogin(r);
      }
    });
  }

  onSuccessfulLogin(user: User) {
    // goto register page to resume registration
    const r = user.status === 'complete' ? 'home' : 'register';
    this.router.navigate(['/', r]);
  }

}
