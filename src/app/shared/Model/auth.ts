export interface UserAuth {
  email: string;
  password: string;
  returnSecureToken: boolean
}

export interface FbAuthResponse {
  idToken: string;
  localId: string;
  expiresIn: string
}
