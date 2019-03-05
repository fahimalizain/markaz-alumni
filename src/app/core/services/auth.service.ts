import { Injectable } from '@angular/core';
import User from 'models/User';
import { SpinnerService } from './spinner.service';
import { HttpClient } from '@angular/common/http';
import { MBResponse, MBResponseLogin } from 'models/MBResponse';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/modules/login/login.component';

export type loginResponse = User | 'user_not_found' | 'wrong_credentials' | 'unknown_error';
const localStorageUserKey = 'user';
type localStorageUser = User & { auth_token: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentStatus: 'logged_in' | 'guest' = 'guest';
  currentToken: string;
  currentUser: User = null;

  constructor(
    private spinnerService: SpinnerService,
    private http: HttpClient) {
    this.loadUser();
  }

  /**
   * Fetches the User data we have from the backend
   * @param userId id
   */
  public oAuthLogin(provider: 'google' | 'facebook', user: User, provider_token: string): Promise<MBResponseLogin> {
    this.logout();
    return this.http.post(
      '/v1/auth/login',
      {
        provider,
        provider_token
      }
    )
      .toPromise()
      .then((response: MBResponseLogin) => {
        if (response.success) {
          // set auth token
          user.state = response.data.state;
          this.setUser(user, response.data.auth_token);
          response._user = user;
        }
        return response;
      }, (e) => {
        return {
          success: false,
          exc: e
        } as MBResponseLogin;
      });
  }

  public logout() {
    this.clearUser();
  }

  public loadUser() {
    let data: string | localStorageUser | null = localStorage.getItem(localStorageUserKey);
    try {
      if (data) {
        data = JSON.parse(data) as localStorageUser;
        if (data.auth_token) {
          this.setUser(data, data.auth_token);
        }
      }
    } catch { }
  }

  public setUser(user: User, auth_token: string) {
    const lsUser: localStorageUser = {
      ...user,
      auth_token
    };
    localStorage.setItem(localStorageUserKey, JSON.stringify(lsUser));
    this.currentToken = auth_token;
    this.currentStatus = 'logged_in';
    this.currentUser = user;
  }

  public clearUser() {
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
