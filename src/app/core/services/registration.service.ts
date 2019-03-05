import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MBResponseSchoolRecordsSearch } from 'models/MBResponse';

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
      console.log(response);
      return response;
    });
  }
}
