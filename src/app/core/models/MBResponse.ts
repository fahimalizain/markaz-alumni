export interface MBResponse {
  status: 'MB2_0000';
}

export interface MBLoginResponse extends MBResponse {
  data: {
    auth_token: string;
    state: number;
  };
}
