import { Injectable } from "@angular/core";
import { AuthService, loginResponse } from "./auth.service";
import { SpinnerService } from "./spinner.service";
import { GoogleLoginResponse } from "models/third.party.interfaces";
import { MBResponseLogin } from "models/MBResponse";

@Injectable({
  providedIn: "root"
})
export class GoogleService {
  gAuth = null;

  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService
  ) {
    this.init();
  }

  public async init() {
    const wnd = window as any;
    await this.awaitGAPIScript();
    wnd.gapi.load("auth2", () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      wnd.gapi.auth2
        .init({
          client_id:
            "4012323620-nj5anejonq40p23gr4mbthp04va8b0b6.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin"
          // Request scopes in addition to 'profile' and 'email'
          // scope: 'additional_scope'
        })
        .then(
          gAuth => {
            this.gAuth = gAuth;
          },
          e => console.log("Google Auth Init Error", e)
        );
    });
  }

  public login(): Promise<MBResponseLogin> {
    const spinnerId = "google_signin";
    this.spinnerService.showSpinner(spinnerId);
    return new Promise((resolve, reject) => {
      try {
        this.gAuth
          .signIn({ scope: "profile email" })
          .then((gResponse: GoogleLoginResponse) => {
            // google sign in done, forward to backend
            return this.authService.oAuthLogin(
              "google",
              {
                firstName: gResponse.getBasicProfile().getGivenName(),
                lastName: gResponse.getBasicProfile().getFamilyName(),
                email: gResponse.getBasicProfile().getEmail(),
                state: 0
              },
              gResponse.getAuthResponse().id_token
            );
          })
          .then((r: MBResponseLogin) => {
            resolve(r);
          })
          .catch(e => {
            resolve({
              status_code: "MB5_0000",
              success: false,
              exc: e
            } as MBResponseLogin);
            console.warn("Google Login", e);
          })
          .then(() => this.spinnerService.hideSpinner(spinnerId));
      } catch (e) {
        resolve(({ success: false, exc: e } as Partial<
          MBResponseLogin
        >) as any);
        console.warn("Google Login", e);
      }
    });
  }

  private awaitGAPIScript() {
    return new Promise(res => {
      const check = () => {
        // @ts-ignore
        if (!window.gapi) {
          setTimeout(check, 20);
        } else {
          res();
        }
      };
      check();
    });
  }
}
