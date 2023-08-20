import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class userService {
  constructor(
    private http: HttpClient) {
  }

  createUserInRealtimeDatabase(ui: any, data: any): Observable<any> {
    const userRef = `${environment.firebaseConfig.databaseURL}/users/${ui}.json`;

    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: data.displayName,
      created: new Date()
    };

    return this.http.put(userRef, userData);
  }

  getUserById(userId: string | null): Observable<any> {
    const userUrl = `${environment.firebaseConfig.databaseURL}/users/${userId}.json`;
    return this.http.get(userUrl);
  }

  updateUser(ui:any, data:any): Observable<any> {
    const userRef = `${environment.firebaseConfig.databaseURL}/users/${ui}.json`;

    return this.http.patch(userRef, data);
  }
}
