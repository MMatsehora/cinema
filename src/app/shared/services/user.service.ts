import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class userService {
  constructor(
    private http: HttpClient,
    private auth: AuthService) {
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

  uploadFile(file: File, filePath: string): Observable<any> {
    const storageBaseUrl = `https://firebasestorage.googleapis.com/v0/b/${environment.firebaseConfig.storageBucket}/o`;
    const fullUrl = `${storageBaseUrl}/${encodeURIComponent(filePath)}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.token}`
    });

    const options = {
      headers: headers
    };

    return this.http.post(fullUrl, file, options);
  }
}
