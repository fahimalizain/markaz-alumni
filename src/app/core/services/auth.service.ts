import { Injectable } from "@angular/core";
import User from "models/User";
import { SpinnerService } from "./spinner.service";
import { HttpClient } from "@angular/common/http";
import { MBResponse, MBResponseLogin, isMBSuccessful } from "models/MBResponse";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "src/app/modules/login/login.component";
import { Router } from '@angular/router';

export type loginResponse =
  | User
  | "user_not_found"
  | "wrong_credentials"
  | "unknown_error";
const localStorageUserKey = "user";
type localStorageUser = User & { auth_token: string };

@Injectable({
  providedIn: "root"
})
export class AuthService {
  currentStatus: "logged_in" | "guest" = "guest";
  currentToken: string;
  currentUser: User = null;

  constructor(
    private spinnerService: SpinnerService,
    private router: Router,
    private http: HttpClient
  ) {
    this.loadUser();
    // @ts-ignore
    window.logout = () => {
      this.logout(); // temp quick way to logout
    };
  }

  /**
   * Fetches the User data we have from the backend
   * @param userId id
   */
  public oAuthLogin(
    provider: "google" | "facebook",
    user: User,
    provider_token: string
  ): Promise<MBResponseLogin> {
    this.logout();
    return this.http
      .post("/v1/auth/login", {
        provider,
        provider_token
      })
      .toPromise()
      .then(
        (response: MBResponseLogin) => {
          response.success = isMBSuccessful(response.status_code);
          if (response.success) {
            // set auth token
            user.state = response.data.state;
            this.setUser(user, response.data.auth_token);
            response._user = user;
          }
          return response;
        },
        e => {
          return {
            success: false,
            exc: e
          } as MBResponseLogin;
        }
      );
  }

  public isLoggedIn() {
    return !!this.currentUser && !!this.currentToken;
  }

  public logout() {
    this.clearUser();
  }

  public loadUser() {
    let data: string | localStorageUser | null = localStorage.getItem(
      localStorageUserKey
    );
    try {
      if (data) {
        data = JSON.parse(data) as localStorageUser;
        if (data.auth_token) {
          this.setUser(data, data.auth_token);
        }
      }
    } catch {}
  }

  public setUser(user: User, auth_token: string) {
    this.currentToken = auth_token;
    this.currentStatus = "logged_in";
    this.currentUser = user;
    this.updateLocalStorage();
    this.routeToRegistration();
  }

  public setUserRegState(state: number) {
    if (!this.currentUser) {
      return;
    }
    this.currentUser.state = state;
    this.updateLocalStorage();
  }

  public updateLocalStorage() {
    if (this.currentUser) {
      const lsUser: localStorageUser = {
        ...this.currentUser,
        auth_token: this.currentToken
      };
      localStorage.setItem(localStorageUserKey, JSON.stringify(lsUser));
    } else {
      localStorage.setItem(localStorageUserKey, null);
    }
  }

  public clearUser() {
    this.currentToken = null;
    this.currentStatus = "guest";
    this.currentUser = null;
    this.updateLocalStorage();
  }

  public getToken() {
    if (this.currentStatus === "logged_in") {
      return this.currentToken;
    } else {
      return null;
    }
  }

  public getCurrentUserName() {
    if (this.isLoggedIn()) {
      return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
    return "";
  }

  private routeToRegistration() {
    if (window.location.pathname.indexOf("/register") >= 0) {
      return;
    }
    const r = this.currentUser.state >= 4 ? 'home' : 'register';
    this.router.navigate(['/', r]);
  }
}
