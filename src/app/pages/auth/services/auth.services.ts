import { Injectable } from "@angular/core";
import {SignUpRequestInterface} from "../types/signUpRequest.interface";
import {catchError, Observable, switchMap} from "rxjs";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {LoginRequestInterface} from "../types/loginRequest.interface";

@Injectable()
export class AuthServices {
  constructor(private http: HttpClient) {}
  signUp(data: SignUpRequestInterface): Observable<CurrentUserInterface> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
    data.returnSecureToken = true;

    return this.http.post<CurrentUserInterface>(url, data);
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`;
    data.returnSecureToken = true;

    return this.http.post<CurrentUserInterface>(url, data);
  }

  getCurrentUser(): Observable<any> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${environment.firebaseConfig.apiKey}`;
    return this.http.post<any>(url, '');
  }
}
