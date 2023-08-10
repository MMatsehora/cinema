import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public title: string = `User account`;
  public textBtn: string = 'Log out';

  constructor(
    private auth: AuthService,
    private router: Router,
    public notifier: NotifierService) { }

  ngOnInit(): void {
  }

  userLogOut() {
    this.auth.logout();
    this.router.navigate(['/']);
    this.notifier.notify('warning', 'Вы вышли из учетной записи.')
  }
}
