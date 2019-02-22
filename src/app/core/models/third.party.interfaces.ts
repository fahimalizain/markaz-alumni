export interface FacebookLoginResponse {
  status: 'connected' | 'not_authorized' | 'unknown';
  authResponse: {
    accessToken: string;
    /** unix timestamp */
    expiresIn: string;
    signedRequest: string;
    userID: string;
  };
}

export interface GoogleLoginResponse {
  status: string;
}
