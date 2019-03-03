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
  getAuthResponse: () => {
    access_token: string;
    id_token: string;
    scope: string;
    expires_in: number;
    expires_at: number;
  };
  getBasicProfile: () => {
    getId(): string;
    getEmail(): string;
    getName(): string;
    getFamilyName(): string;
    getGivenName(): string;
    getImageUrl(): string;
  };
  getId(): string;
  isSignedIn(): boolean;
  hasGrantedScopes(): boolean;
  getGrantedScopes(): string;
}
