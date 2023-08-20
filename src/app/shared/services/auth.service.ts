import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FbAuthResponse, UserAuth} from "../Model/auth";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authState: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(
    private http: HttpClient
  ) { }

  get token(): any {
    const expDateValue = localStorage.getItem('fb-token-exp');

    if (expDateValue) {
      const expDate = new Date(expDateValue)

      if (new Date > expDate) {
        this.logout();
        return null;
      }

      return localStorage.getItem('fb-token');
    } else {
      return null;
    }
  }

  signUp(user: UserAuth): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`, user).pipe(
      catchError(error => {
        console.error('Sign Up Error:', error);
        throw error;
      })
    );
  }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(error => {
        console.error('Sign In Error:', error);
        throw error;
      })
    );
  }

  signUpAndSignIn(user: UserAuth): Observable<any> {
    return this.signUp(user).pipe(
      switchMap(signUpResponse => {
        return this.signIn(user.email, user.password).pipe(
          map(signInResponse => {
            return {
              signUpResponse: signUpResponse,
              signInResponse: signInResponse
            };
          })
        );
      })
    );
  }

  logout() {
    this.setTokenInternal(null);
  }

  setToken(response: FbAuthResponse | null) {
    this.setTokenInternal(response);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setTokenInternal(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
      localStorage.setItem('user-id', response.localId);
    } else {
      localStorage.clear();
    }
  }
}
