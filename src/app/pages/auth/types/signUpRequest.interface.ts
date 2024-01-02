export interface SignUpRequestInterface {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  returnSecureToken?: boolean
}
