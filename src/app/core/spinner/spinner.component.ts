import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  visible = false;

  constructor(spinnerService: SpinnerService) {
    spinnerService.isSpinnerVisible.subscribe((v) => this.visible = v);
  }

  ngOnInit() {
  }

}
