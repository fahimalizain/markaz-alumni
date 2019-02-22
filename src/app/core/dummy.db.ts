import User from 'models/User';
import { loginResponse } from 'services/auth.service';
import { FacebookLoginResponse, GoogleLoginResponse } from 'models/third.party.interfaces';

export default class DummyDB {

  constructor() {
    this._loadDummyLS();
  }

  public login(email: string, password: string): Promise<loginResponse> {
    return new Promise(async (res, rej) => {
      await new Promise((r) => setTimeout(r, 1000));

      const _user = this._dummy[email];
      if (!_user) {
        res('user_not_found');
      } else if (_user.password !== password) {
        res('wrong_credentials');
      } else {
        const user = User.getUser(Object.assign({ email }, this._dummy[email]));
        res(user);
      }
    });
  }

  public async oAuthLogin(provider: 'google' | 'facebook', data: FacebookLoginResponse | GoogleLoginResponse)
    : Promise<loginResponse> {
    await new Promise((r) => setTimeout(r, 1000));

    // test if already registered, if so return details
    // else fetch email from the provider, if applicable
    // we are not interested in their names as we will rely on the data from markaz
    if (provider === 'google') {
      return this.googleOAuthLogin(data as GoogleLoginResponse);
    } else if (provider === 'facebook') {
      return this.facebookOAuthLogin(data as FacebookLoginResponse);
    }

    return 'unknown_error';
  }

  public emailValid(email: string) {
    return !!!this._dummy[email];
  }

  private async googleOAuthLogin(data: GoogleLoginResponse): Promise<loginResponse> {
    return 'unknown_error';
  }

  private async facebookOAuthLogin(data: FacebookLoginResponse): Promise<loginResponse> {
    if (data.status !== 'connected') {
      return 'unknown_error';
    }

    const userId = 'fb-' + data.authResponse.userID;
    if (!!this._dummy[userId]) {
      // already registered
      return User.getUser(this._dummy[userId]);
    } else {
      // reg
      const user: any = {
        firstName: null,
        lastName: null,
        email: null,
        status: {
          details: 'not_filled',
          payment: 'pending'
        }
      };
      await new Promise((res, rej) => {
        // FB.api is callback based, get name and email
        (window as any).FB.api('/me?fields=name,email', function(response) {
          // response.name
          const name = response.name.split(' ');
          if (name.length > 0) {
            user.firstName = name[0];
            name.splice(0, 1);
            user.lastName = name.join(' ');
          }

          user.email = response.email || null;
          res();
        });
      });

      this._dummy[userId] = user;
      this._saveDummytoLS();

      return user;
    }
  }

  // tslint:disable-next-line:member-ordering
  private _dummy: { [x: string]: ({ [x: string]: any } & User) } = {
    'mhd@gmail.com': {
      email: 'mhd@gmail.com',
      password: '1234',
      status: {
        details: 'not_filled', // | 'filled', 'verified'
        payment: 'pending', // complete
      },
      firstName: 'Mohammed',
      lastName: 'Kutty'
    },
  };
  // tslint:disable-next-line:member-ordering
  private _dummyLSKey = 'authDummyData';
  private _saveDummytoLS() {
    localStorage.setItem(this._dummyLSKey, JSON.stringify(this._dummy));
  }
  private _loadDummyLS() {
    const d = localStorage.getItem(this._dummyLSKey);
    if (!d) {
      this._saveDummytoLS();
      this._loadDummyLS();
    } else {
      this._dummy = JSON.parse(d);
    }
  }
}
