import User from './User';

export interface MBResponse {
  status_code: 'MB2_0000';
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

export interface MBResponseSchoolRecordsSearch extends MBResponse {
  data: {
    school_records: Array<{
      name: string;
      admission_no: string;
    }>
  };
}
