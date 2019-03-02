import { Injectable } from '@angular/core';
import { AuthService, loginResponse } from './auth.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export default class GoogleService {

  gAuth = null;

  constructor(private authService: AuthService, private spinnerService: SpinnerService) {
    this.init();
  }

  public init() {
    const wnd = window as any;
    wnd.gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      wnd.gapi.auth2.init({
        client_id: '4012323620-nj5anejonq40p23gr4mbthp04va8b0b6.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        // scope: 'additional_scope'
      })
      .then((gAuth) => {
        this.gAuth = gAuth;
        console.log(gAuth);
      }, (e) => console.log('Google Auth Init Error', e));
    });
  }

  public login(): Promise<loginResponse> {
    const spinnerId = 'google_signin';
    this.spinnerService.showSpinner(spinnerId);
    return new Promise((res, rej) => {
      try {
        this.gAuth.signIn({ scope: 'profile email'})
        .then((gUser) => {
          // https://developers.google.com/identity/sign-in/web/reference#googleusergetbasicprofile
          const bProfile = gUser.getBasicProfile();

          console.log(gUser, bProfile.getName());
          this.spinnerService.hideSpinner(spinnerId);
          res(gUser.getBasicProfile());
        })
        .catch((e) => {
          res('unknown_error');
          console.warn('Google Login', e);
        })
        .then(() => this.spinnerService.hideSpinner(spinnerId));
      } catch (e) {
        res('unknown_error');
        console.warn('Google Login', e);
      }
    });
  }
}
