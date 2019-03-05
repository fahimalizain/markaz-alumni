import { Injectable } from '@angular/core';
import User from 'models/User';
import { SpinnerService } from './spinner.service';
import DummyDB from '../dummy.db';
import { HttpClient } from '@angular/common/http';
import { MBResponse, MBLoginResponse } from 'models/MBResponse';

export type loginResponse = User | 'user_not_found' | 'wrong_credentials' | 'unknown_error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentStatus: 'logged_in' | 'guest' = 'guest';
  currentToken: string;
  currentUser: User = null;

  dummyDB = new DummyDB();

  constructor(
    private spinnerService: SpinnerService,
    private http: HttpClient) { }

  public login(email: string, password: string): Promise<loginResponse> {
    this.logout();
    const spinnerId = 'auth_login';
    this.spinnerService.showSpinner(spinnerId);
    return this.dummyDB.login(email, password)
    .then((r) => {
      this.spinnerService.hideSpinner(spinnerId);
      if (User.isUser(r)) {
        this.setUser(r, '');
      }
      return r;
    });
  }

  /**
   * Fetches the User data we have from the backend
   * @param userId id
   */
  public oAuthLogin(provider: 'google' | 'facebook', provider_token: string): Promise<loginResponse> {
    this.logout();
    return this.http.post(
      '/v1/auth/login',
      {
        provider,
        provider_token
      }
    )
    .toPromise()
    .then((data: MBLoginResponse) => {
      if (data.status === 'MB2_0000') {
        // success
        // set auth token
      }
      return 'unknown_error' as loginResponse;
    }, () => 'unknown_error' as loginResponse);
  }

  /**
   * Used to check if email is valid to be used for a NEW account
   * @param email email to check
   */
  public checkEmailValidity(email: string) {
    return this.dummyDB.emailValid(email);
  }

  public setUser(user: User, auth_token: string) {
    this.currentToken = auth_token;
    this.currentStatus = 'logged_in';
    this.currentUser = user;
  }

  public logout() {
    this.currentToken = null;
    this.currentStatus = 'guest';
    this.currentUser = null;
  }

  public getToken() {
    if (this.currentStatus === 'logged_in') {
      return this.currentToken;
    } else {
      return null;
    }
  }
}
