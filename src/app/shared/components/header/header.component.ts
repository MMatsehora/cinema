import {Component, HostListener, OnInit} from '@angular/core';
import {menuList} from "../../Model/menu-list";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedInSelector} from "../../../pages/auth/store/selectors";
import {AppStateInterface} from "../../types/appState.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public textBtnFirst: string = 'Sign up'
  public textBtnSecond: string = 'Log in'
  isLoggedIn$: Observable<boolean | null> = this.store.pipe(select(isLoggedInSelector));
  isClassVisible: boolean = false;

  constructor(
    private router: Router,
    public auth: AuthService,
    private store: Store<AppStateInterface>) {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.header__burger')) {
      this.isClassVisible = false;
    }
  }

  menuList: menuList[] = [
    {
      title: "showtimes",
      text: "movies",
      routerLink: {
        firstParam: "/afisha"
      }
    },
    {
      title: "previews",
      text: "movies",
      routerLink: {
        firstParam: "/future"
      }
    },
    {
      title: "about us",
      text: "contacts",
      routerLink: {
        firstParam: "/about",
        secondParam: "cinema"
      }
    }
  ]

  toggleClass() {
    this.isClassVisible = !this.isClassVisible;
  }

  goToSignUpPage() {
    this.router.navigate(['/auth/sign-up'])
  }

  goToLogInPage() {
    this.router.navigate(['/auth/login'])
  }
}
