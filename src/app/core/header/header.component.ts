import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/modules/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  showLoginComponent() {
    this.matDialog.open(LoginComponent);
  }

}
