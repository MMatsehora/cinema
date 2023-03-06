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

  hideClass() {
    this.isClassVisible = false;
  }
}
