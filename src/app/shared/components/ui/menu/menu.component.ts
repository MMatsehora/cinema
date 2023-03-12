import {Component, Input, OnInit} from '@angular/core';
import {menuList} from "../../../Model/menu-list";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isClassVisible: boolean = false;
  @Input() menuList: menuList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
