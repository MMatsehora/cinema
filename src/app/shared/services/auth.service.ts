import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../Model/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(user: User) : Observable<any> {
    user.returnSecureToken = true;
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.apiKeyFireBase, user);
  }
}
