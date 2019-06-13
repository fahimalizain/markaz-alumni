import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MBResponseSchoolRecordsSearch, isMBSuccessful, MBResponse, MBResponseSchoolRecord } from 'models/MBResponse';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public searchSchoolRecords(name: string, dateOfBirth: string): Promise<MBResponseSchoolRecordsSearch> {
    return this.http.get(
      '/v1/alumni/search',
      {
        params: {
          name,
          date_of_birth: dateOfBirth
        }
      }
    ).toPromise()
    .then((response: MBResponseSchoolRecordsSearch) => {
      response.success = isMBSuccessful(response.status_code);
      return response;
    });
  }

  public identifyUser(admission_no: number) {
    return this.http.post(
      '/v1/alumni/me/identify',
      {
        admission_no
      }
    ).toPromise()
    .then((r: MBResponse) => {
      r.success = isMBSuccessful(r.status_code);
      return r;
    });
  }

  public getUserSchoolRecord(): Promise<MBResponseSchoolRecord> {
    return this.http.get(
      '/v1/alumni/me/schoolrecord'
    ).toPromise()
    .then((r: MBResponseSchoolRecord) => {
      r.success = isMBSuccessful(r.status_code);
      if (r.success) {
        r.data.admission_no = r.data.admissions.sort((a, b) => a.class_of_leaving > b.class_of_leaving ? -1 : 1)[0].admission_no;
      }
      return r;
    });
  }

  public updateUserInfo(newUserInfo: UpdateUserInfoParams): Promise<MBResponse> {
    return this.http.post(
      '/v1/alumni/me/update',
      newUserInfo
    ).toPromise()
    .then((r: MBResponse) => {
      r.success = isMBSuccessful(r.status_code);
      return r;
    });
  }
}

export interface UpdateUserInfoParams {
  name: string;
  father_name: string;
  mother_name: string;
  address: string;
  pin: string;
  gender: string;
  date_of_birth: string;
  marital_status: 'married' | 'not married';
  phone_number: number;
  email: string;
  educational_qualification: string;
  profession: string;
}
