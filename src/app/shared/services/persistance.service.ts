import {Injectable} from "@angular/core";
import {CurrentUserInterface} from "../types/currentUser.interface";

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
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

  logout() {
    this.setTokenInternal(null);
  }

  setToken(currentUser: CurrentUserInterface | null) {
    this.setTokenInternal(currentUser);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setTokenInternal(currentUser: CurrentUserInterface | null) {
    if (currentUser) {
      const expDate = new Date(new Date().getTime() + +currentUser.expiresIn * 1000);
      localStorage.setItem('fb-token', currentUser.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
      localStorage.setItem('user-id', currentUser.localId);
    } else {
      localStorage.clear();
    }
  }
}
