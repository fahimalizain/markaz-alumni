import { AuthService, loginResponse } from "./auth.service";
import { Injectable } from "@angular/core";
import { FacebookLoginResponse } from "models/third.party.interfaces";
import { SpinnerService } from "./spinner.service";
import User from "models/User";
import { MBResponseLogin } from "models/MBResponse";

@Injectable({
  providedIn: "root"
})
export class FacebookService {
  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService
  ) {
    this.init();
  }

  public init() {
    const wnd = window as any;
    wnd.FB.init({
      appId: "244899966288884",
      autoLogAppEvents: true,
      xfbml: true,
      version: "v3.2"
    });
  }

  public login(): Promise<MBResponseLogin> {
    const spinnerKey = "fb_login";
    this.spinnerService.showSpinner(spinnerKey);
    return new Promise((resolve, reject) => {
      const wnd = window as any;
      try {
        wnd.FB.login(
          (r: FacebookLoginResponse) => {
            if (r.status !== "connected") {
              // fetch data from our backend, check to see if something exists
              resolve(({
                success: false,
                exc: "FB Connection Failed"
              } as Partial<MBResponseLogin>) as any);
              return;
            }

            new Promise((res, rej) => {
              // fetch user details from facebook api
              wnd.FB.api(
                "/me",
                {
                  fields: [
                    "name",
                    "email",
                    "picture",
                    "first_name",
                    "last_name"
                  ]
                },
                res
              );
            })
              .then(
                (usr: {
                  email: string;
                  name: string;
                  first_name: string;
                  last_name: string;
                  picture: { data: { url: string } };
                }) => {
                  return this.authService.oAuthLogin(
                    "facebook",
                    (({
                      firstName: usr.first_name,
                      lastName: usr.last_name,
                      email: usr.email,
                      profilePicUrl: usr.picture.data.url,
                      oAuthProvider: "facebook"
                    } as Partial<User>) as any) as User,
                    r.authResponse.accessToken
                  );
                }
              )
              .then(v => {
                resolve(v);
              })
              .catch(e => {
                resolve(e || "unknown_error");
              })
              .then(() => this.spinnerService.hideSpinner(spinnerKey));
          },
          {
            scope: "public_profile email",
            auth_type: "rerequest"
          }
        );
      } catch (e) {
        resolve(({ success: false, exc: e } as Partial<
          MBResponseLogin
        >) as any);
        this.spinnerService.hideSpinner(spinnerKey);
      }
    });
  }
}
