import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';
import GoogleService from 'services/google.service';
import FacebookService from 'services/facebook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private googleService: GoogleService, /** So they are initialized and autologined if possible  */
    private facebookService: FacebookService
  ) { }

  ngOnInit() {
  }

}
