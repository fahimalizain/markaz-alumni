import { AuthService, loginResponse } from './auth.service';
import { Injectable } from '@angular/core';
import { FacebookLoginResponse } from 'models/third.party.interfaces';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export default class FacebookService {
  constructor(private authService: AuthService, private spinnerService: SpinnerService) {
    this.init();
  }

  public init() {
    const wnd = window as any;
    wnd.FB.init({
      appId: '244899966288884',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.2'
    });
  }

  public login(): Promise<loginResponse> {
    const spinnerKey = 'fb_login';
    this.spinnerService.showSpinner(spinnerKey);
    return new Promise((resolve, reject) => {
      const wnd = window as any;
      try {
        wnd.FB.login((r: FacebookLoginResponse) => {
          console.log(r);
          if (r.status === 'connected') {
            // fetch data from our backend, check to see if something exists
            this.authService.oAuthLogin('facebook', r)
              .then((v) => {
                this.spinnerService.hideSpinner(spinnerKey);
                resolve(v);
              })
              .catch((e) => {
                this.spinnerService.hideSpinner(spinnerKey);
                resolve(e || 'unknown_error');
              });
          }
        },
          {
            scope: 'public_profile email',
            auth_type: 'rerequest'
          }
        );
      } catch (e) {
        resolve('unknown_error');
        this.spinnerService.hideSpinner(spinnerKey);
        console.warn('Facebook Login', e);
      }
    });
  }
}
