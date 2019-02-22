import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  accountForm: FormGroup;
  detailsForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.detailsForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      lastClass: ['10th', Validators.required],
      graduationYear: [2019, Validators.required]
    });
  }

}
