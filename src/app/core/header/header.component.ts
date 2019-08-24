import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "src/app/modules/login/login.component";
import { AuthService } from "services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  getUserName() {
    return this.authService.isLoggedIn() ? this.authService.getCurrentUserName() : "Keep Connected";
  }

  onKeepConnectedClick() {
    this.collapsed = true;
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/profile"]);
    } else {
      this.showLoginComponent();
    }
  }

  routeTo(r: string[]) {
    this.collapsed = true;
    this.router.navigate(r);
  }

  showLoginComponent() {
    this.matDialog.open(LoginComponent);
  }
}
