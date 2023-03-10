import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isClassVisible: boolean = false;

  toggleClass() {
    this.isClassVisible = !this.isClassVisible;
  }

  menuList = [
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
}
