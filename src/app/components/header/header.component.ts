import { Component } from '@angular/core';
import {menuList} from "../../shared/Model/menu-list";

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
}
