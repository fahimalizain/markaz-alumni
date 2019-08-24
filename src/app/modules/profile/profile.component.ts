import { Component, OnInit } from "@angular/core";
import { AuthService } from "services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log(this.authService.currentUser);
    this.isLoggedIn();
  }

  getTitleName() {
    return this.authService.getCurrentUserName();
  }

  getAdmissionNo() {
    // @ts-ignore
    return this.authService.currentUser.admission_no;
  }

  getMembershipNo() {
    // @ts-ignore
    return this.authService.currentUser.membership_no || "005";
  }

  getProfilePic() {
    // @ts-ignore
    return this.authService.currentUser.profile_pic;
  }

  isLoggedIn() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }

  // particles
  particleStyles = {};
  particleParams = {
    particles: {
      number: {
        value: 100
      },
      color: {
        value: "#b5b177"
      },
      size: {
        value: 5
      },
      shape: {
        type: "polygon"
      },
      line_linked: {
        distance: 50,
        color: "#969693"
      }
    }
  };
}
