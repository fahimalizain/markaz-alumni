import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  MBResponsePayTMTrDataForRegistration,
  isMBSuccessful,
  MBResponsePayTMTrStatus
} from "models/MBResponse";

@Injectable({
  providedIn: "root"
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  public async getPaytmTransactionDataForRegistration() {
    const r = (await this.http
      .post("/v1/alumni/checkout", {
        context: "user_registration"
      })
      .toPromise()) as MBResponsePayTMTrDataForRegistration;
    r.success = isMBSuccessful(r.status_code);
    return r;
  }

  public async getPaytmPaymentStatus(order_id: string) {
    const r = (await this.http.get(
      "/v1/alumni/transaction/status", {
        params: {
          order_id
        }
      }
    ).toPromise()) as MBResponsePayTMTrStatus;
    r.success = isMBSuccessful(r.status_code);
    return r;
  }
}
