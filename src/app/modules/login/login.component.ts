import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService } from 'services/facebook.service';
import { GoogleService } from 'services/google.service';
import { MBResponseLogin } from 'models/MBResponse';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    @Optional() private dialogRef: MatDialogRef<LoginComponent>,
    private googleService: GoogleService,
    private facebookService: FacebookService,
    private router: Router) { }

  ngOnInit() { }

  googleLogin() {
    this.googleService.login().then((r) => {
      if (r.success) {
        this.onSuccessfulLogin(r);
      }
    });
  }

  facebookLogin() {
    this.facebookService.login().then((r) => {
      if (r.success) {
        this.onSuccessfulLogin(r);
      }
    });
  }

  onSuccessfulLogin(response: MBResponseLogin) {
    // goto register page to resume registration
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
