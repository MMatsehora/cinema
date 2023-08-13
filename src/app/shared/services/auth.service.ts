import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FbAuthResponse, User} from "../Model/auth";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userName: string = '';

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) {
    this.userName = localStorage.getItem('userName') ?? '';
  }

  createUserInRealtimeDatabase(uid: string, displayName: string, email: string) {
    const userRef = this.db.object(`users/${uid}`);

    const userData = {
      displayName: displayName,
      email: email,
      created: new Date() // Добавляем поле created с текущей датой
    };

    return userRef.update(userData);
  }

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
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseConfig.apiKey, user);
  }

  signIn(user: User) : Observable<any> {
    user.returnSecureToken = true;
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseConfig.apiKey, user);
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

  setUserName(name: string) {
    this.userName = name;
    localStorage.setItem('userName', name);
  }

  getUserName(): string {
    return this.userName;
  }
}
