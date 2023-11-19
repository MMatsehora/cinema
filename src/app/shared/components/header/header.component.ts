import {Component, HostListener} from '@angular/core';
import {menuList} from "../../Model/menu-list";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public textBtnFirst: string = 'Sign up'
  public textBtnSecond: string = 'Log in'
  isClassVisible: boolean = false;

  constructor(
    private router: Router,
    public auth: AuthService) {
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
