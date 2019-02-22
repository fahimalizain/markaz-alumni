import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isSpinnerVisible = new BehaviorSubject(false);
  spinnerData: { [x: string]: { message: string, expTimestamp: number, expired: boolean } } = {};
  spinnerExpCheckInterval: number | null;

  public updateSpinnerStatus() {
    const expectedState = Object.keys(this.spinnerData).length > 0;
    if (this.isSpinnerVisible.value === expectedState) {
      // perhaps called by setInterval. Lets test expiry
      const currentTimestamp = new Date().getTime() / 1000;
      // tslint:disable-next-line:forin
      for (const id in this.spinnerData) {
        const msg = this.spinnerData[id];
        if (msg.expTimestamp <= currentTimestamp) {
          msg.expired = true;
        }
      }
      return;
    }

    this.isSpinnerVisible.next(expectedState);
    if (expectedState === true) {

      // setInterval to check expiry
      if (this.spinnerExpCheckInterval === null) {
        this.spinnerExpCheckInterval = setInterval(
          (() => this.updateSpinnerStatus()) as TimerHandler,
          250
        );
      }
    } else {
      if (this.spinnerExpCheckInterval !== null) { clearInterval(this.spinnerExpCheckInterval); }

    }
  }

  /**
   * Shows a spinner
   * @param id To keep track of what is being loaded
   * @param message Loading message
   * @param timeoutSeconds Max load time, show message, like ANR
   */
  public showSpinner(id: string, message: string = 'Please wait', timeoutSeconds = 10) {
    this.spinnerData[id] = {
      message,
      expTimestamp: new Date().getTime() / 1000 + timeoutSeconds,
      expired: false
    };
    this.updateSpinnerStatus();
  }

  /**
   * Hides a spinner
   * @param id The spinner to clear
   */
  public hideSpinner(id: string) {
    delete this.spinnerData[id];
    this.updateSpinnerStatus();
  }
}
