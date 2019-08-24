import { Component, OnInit } from "@angular/core";
import { AuthService } from "services/auth.service";
import { GoogleService } from "services/google.service";
import { FacebookService } from "services/facebook.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "markaz-alumni";

  constructor(
    private authService: AuthService,
    private googleService: GoogleService /** So they are initialized and autologined if possible  */,
    private facebookService: FacebookService
  ) {}

  ngOnInit() {
    this.authService.loadUser();
  }
}
