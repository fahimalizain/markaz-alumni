import {
  Component,
  OnInit,
  ViewChild,
  NgZone,
  ElementRef
} from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { AuthService } from "services/auth.service";
import { RegistrationService } from "services/registration.service";
import { GoogleService } from "services/google.service";
import { FacebookService } from "services/facebook.service";
import User from "models/User";
import { SpinnerService } from "services/spinner.service";
import { MatStepper } from "@angular/material";
import {
  SchoolRecordsResult,
  MBResponsePayTMTrDataForRegistration
} from "models/MBResponse";
import Utils from "src/app/core/utils";
import { PaymentService } from "services/payment.service";
import { ActivatedRoute } from "@angular/router";

enum StepperIndex {
  LOGIN = 0,
  IDENTIFY = 1,
  DETAILS = 2,
  PAYMENT = 3,
  COMPLETED = 4
}

// uglifyjs breaks the variable naming
enum RegistrationState {
  JUST_REGISTERED = 1,
  IDENTIFIED = 2,
  DETAILS_UPDATED = 3,
  PAYMENT_COMPLETED = 4
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: SchoolRecordsResult;
  selectForm: FormGroup;
  detailsForm: FormGroup;

  paymentActionUrl: string;
  paymentData: { [x: string]: any };
  pollOrderId: string;
  paymentPollStatus: "PENDING" | "TXN_SUCCESS" | "TXN_FAILURE" | "NONE" = "NONE";
  @ViewChild("paymentForm") paymentForm: ElementRef;
  @ViewChild("stepper") matStepper: MatStepper;

  constructor(
    private authService: AuthService,
    private googleService: GoogleService,
    private facebookService: FacebookService,
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    private spinnerService: SpinnerService,
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.searchForm = this._fb.group({
      dateOfBirth: ["10th", Validators.required],
      name: ["", Validators.required]
    });
    this.selectForm = this._fb.group({
      admissionNo: ["", Validators.required]
    });
    this.detailsForm = this._fb.group({
      name: ["", Validators.required],
      admission_no: ["", Validators.required],
      father_name: ["", Validators.required],
      mother_name: ["", Validators.required],
      address: ["", Validators.required],
      pin: [
        "",
        [Validators.required, Validators.pattern("^[1-9][0-9]{2}[ ]?[0-9]{3}$")]
      ],
      gender: [
        "male",
        [Validators.required, Validators.pattern("male|female")]
      ],
      date_of_birth: ["", Validators.required],
      marital_status: [
        "Not Married",
        [Validators.required, Validators.pattern("married|not married")]
      ],
      phone_number: [
        "",
        [
          Validators.required,
          Validators.pattern("^(\\+\\d{1,3}[- ]?)?\\d{10}$")
        ]
      ],
      email: [
        "",
        [Validators.required, Validators.pattern("\\S+@\\S+\\.\\S+")]
      ],
      educational_qualification: ["", Validators.required],
      profession: ["", Validators.required],
      spouse_name: [""]
    });

    this.resumeUserState();

    if (this.route.snapshot.queryParams.pg_status) {
      console.log("Waiting payment");
      this.pollOrderId = this.route.snapshot.queryParams.pg_status;
      this.pollPayment();
    }
  }

  async googleLogin() {
    await this.googleService.login();
    this.resumeUserState();
  }

  async facebookLogin() {
    await this.facebookService.login();
    this.resumeUserState();
  }

  async searchRecords() {
    const searchTerm = this.searchForm.value as {
      name: string;
      dateOfBirth: Date;
    };
    if (!searchTerm.name || !searchTerm.dateOfBirth) {
      return;
    }
    const spinnerId = "search-records";
    this.spinnerService.showSpinner(spinnerId);
    const r = await this.registrationService.searchSchoolRecords(
      searchTerm.name,
      Utils.formatDate(searchTerm.dateOfBirth)
    );
    if (r.success) {
      this.searchResults = r.data.school_records;
    } else {
      this.searchResults = null;
    }
    this.spinnerService.hideSpinner(spinnerId);
  }

  async confirmRecord(admissionNo: number) {
    if (!admissionNo || isNaN(admissionNo)) {
      return;
    }
    const spinnerId = "identify-user";
    this.spinnerService.showSpinner(spinnerId);
    const r = await this.registrationService.identifyUser(admissionNo);
    this.spinnerService.hideSpinner(spinnerId);

    if (r.success) {
      this.authService.setUserRegState(RegistrationState.IDENTIFIED);
      this.matStepperGoto(StepperIndex.DETAILS);
      this.loadSchoolRecord();
    } else {
      // TODO
    }
  }

  async loadSchoolRecord() {
    const spinnerId = "school-record";
    this.spinnerService.showSpinner(spinnerId);
    const r = await this.registrationService.getUserSchoolRecord();
    if (r.success) {
      const d = r.data;
      this.detailsForm.setValue({
        admission_no: d.admission_no,
        name: d.name,
        pin: d.pin,
        father_name: d.father_name,
        mother_name: d.mother_name,
        address: d.address,
        date_of_birth: d.date_of_birth,
        gender: "male",
        marital_status: "not married",
        phone_number: "",
        email: "",
        educational_qualification: "",
        profession: "",
        spouse_name: ""
      });
    } else {
    }
    this.spinnerService.hideSpinner(spinnerId);
  }

  async updateDetails() {
    const spinnerId = "update-details";
    this.spinnerService.showSpinner(spinnerId);
    const r = await this.registrationService.updateUserInfo(
      this.detailsForm.getRawValue()
    );
    if (r.success) {
      this.authService.setUserRegState(RegistrationState.DETAILS_UPDATED);
      this.matStepperGoto(StepperIndex.PAYMENT);
    } else {
      //
    }
    this.spinnerService.hideSpinner(spinnerId);
  }

  async makePayment() {
    const spinnerId = "make-payment";
    this.spinnerService.showSpinner(spinnerId);
    const r = await this.paymentService.getPaytmTransactionDataForRegistration();
    if (r.success) {
      // TODO r.data.pg_redirection handling
      this.paymentActionUrl = r.data.pg_data.url;
      this.paymentData = r.data.pg_data.form_fields;
      await Utils.asyncSleep(100); // time to update the form action attr and <inputs />
      this.paymentForm.nativeElement.submit();
    } else {
      // TODO
    }
    // Dont hide, we are going to be redirected
    this.spinnerService.hideSpinner(spinnerId);
  }

  async pollPayment() {
    const spinnerId = "make-payment";
    this.paymentPollStatus = "PENDING";
    this.spinnerService.showSpinner(spinnerId);

    while (this.paymentPollStatus === "PENDING") {
      const r = await this.paymentService.getPaytmPaymentStatus(this.pollOrderId);
      if (r.success) {
        if (r.data.status === "PENDING") {
          await Utils.asyncSleep(500);
        } else {
          this.paymentPollStatus = r.data.status;
        }
      } else {
        this.paymentPollStatus = "TXN_FAILURE";
      }
    }
    this.spinnerService.hideSpinner(spinnerId);
    if (this.paymentPollStatus === "TXN_SUCCESS") {
      this.authService.setUserRegState(RegistrationState.PAYMENT_COMPLETED);
      this.matStepperGoto(StepperIndex.COMPLETED);
    }
  }

  isOAuthLoggedIn() {
    return this.authService.isLoggedIn();
  }

  hasFoundStudentDetails() {
    return this.isOAuthLoggedIn() && this.authService.currentUser.state >= 2;
  }

  hasUpdatedDetails() {
    return this.isOAuthLoggedIn() && this.authService.currentUser.state >= 3;
  }

  paymentCompleted() {
    return this.isOAuthLoggedIn() && this.authService.currentUser.state >= 4;
  }

  private resumeUserState() {
    if (!this.isOAuthLoggedIn()) {
      console.log("register-not logged int");
      // goto first
      this.matStepperGoto(StepperIndex.LOGIN);
    } else {
      console.log("register-already logged in");
      const state = this.authService.currentUser.state || 0;
      if (state >= 4) {
        // registration done, go home ?
        this.matStepperGoto(StepperIndex.COMPLETED);
      } else {
        this.matStepperGoto(state as number);
        if (state === 2) {
          this.loadSchoolRecord();
        }
      }
    }
  }

  private matStepperGoto(idx: StepperIndex) {
    console.log("GOTO ", idx);
    setTimeout(() => (this.matStepper.selectedIndex = idx), 1);
  }
}
