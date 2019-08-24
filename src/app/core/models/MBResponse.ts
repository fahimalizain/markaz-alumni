import User from "./User";

export function isMBSuccessful(status_code: string) {
  return status_code && status_code.indexOf && status_code.indexOf("MB2_") >= 0;
}

export interface MBResponse {
  status_code: "MB2_0000" | "MB5_0000";
  success: boolean;
  exc?: any;
}

export interface MBResponseLogin extends MBResponse {
  data: {
    auth_token: string;
    /** Same as in User.ts */
    state: number;
  };
  /** Filled client side */
  _user: User;
}

export interface MBResponseProfile extends MBResponse {
  data: {
    admission_no: number;
    membership_no: number;
    name: string;
    profile_pic: string;
    state: number;
  };
}

export interface MBResponseSchoolRecord extends MBResponse {
  data: {
    name: string;
    address: string;
    admission_no: number;
    admissions: Array<{
      admission_no: number;
      class_of_joining: number;
      date_of_admission: string;
      class_of_leaving: string;
      date_of_leaving: string;
    }>;
    date_of_birth: string;
    father_name: string;
    mother_name: string;
    pin: string;
  };
}

export interface MBResponseSchoolRecordsSearch extends MBResponse {
  data: {
    school_records: SchoolRecordsResult;
  };
}

export interface MBResponsePayTMTrDataForRegistration extends MBResponse {
  data: {
    pg_redirection: boolean;
    pg_data: {
      form_fields: {
        MID: string;
        WEBSITE: string;
        CHANNEL_ID: string;
        INDUSTRY_TYPE_ID: string;
        ORDER_ID: string;
        CUST_ID: string;
        TXN_AMOUNT: string;
        CALLBACK_URL: string;
        EMAIL: string;
        MOBILE_NO: string;
        CHECKSUMHASH: string;
      };
      url: string;
    };
  };
}

export interface MBResponsePayTMTrStatus extends MBResponse {
  data: {
    status: "TXN_SUCCESS" | "TXN_FAILURE" | "PENDING";
  };
}

export type SchoolRecordsResult = Array<{
  name: string;
  admission_no: string;
}>;
