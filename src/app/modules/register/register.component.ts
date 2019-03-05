import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'services/auth.service';
import { RegistrationService } from 'services/registration.service';
import { GoogleService } from 'services/google.service';
import { FacebookService } from 'services/facebook.service';
import User from 'models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private authService: AuthService,
    private registrationService: RegistrationService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this._fb.group({
      dateOfBirth: ['10th', Validators.required],
      name: ['', Validators.required]
    });
  }

  searchRecords() {
    const searchTerm = this.searchForm.value as { name: string, dateOfBirth: Date };
    if (!searchTerm.name || !searchTerm.dateOfBirth) { return; }
    const dobFormatted = (() => {
      const d = searchTerm.dateOfBirth, year = d.getFullYear();
      let month = '' + (d.getMonth() + 1), day = '' + d.getDate();

      if (month.length < 2) { month = '0' + month; }
      if (day.length < 2) { day = '0' + day; }

      return [year, month, day].join('-');
    })();
    this.registrationService.searchSchoolRecords(
      searchTerm.name,
      dobFormatted
    );
  }
}
