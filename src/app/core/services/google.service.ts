import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export default class GoogleService {

  constructor(private authService: AuthService) {
    this.init();
  }

  public init() {
    const wnd = window as any;
    wnd.gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      wnd.auth2 = wnd.gapi.auth2.init({
        client_id: '4012323620-nj5anejonq40p23gr4mbthp04va8b0b6.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        // scope: 'additional_scope'
      });
    });
  }

  public login() {
    return new Promise((res, rej) => {
      try {

      } catch (e) {
        res('unknown_error');
        console.warn('Facebook Login', e);
      }
    });
  }
}
