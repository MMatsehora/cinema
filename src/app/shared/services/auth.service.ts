import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FbAuthResponse, User} from "../Model/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

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

  signUp(user: User) : Observable<any> {
    user.returnSecureToken = true;
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.apiKeyFireBase, user);
  }

  signIn(user: User) : Observable<any> {
    user.returnSecureToken = true;
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.apiKeyFireBase, user);
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
    } else {
      localStorage.clear();
    }
  }
}
