import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {userService} from "../../shared/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public titleFirst: string = `My profile`;
  public titleSecond: string = 'Information';
  public titleThird: string = 'About Me';
  public textBtnFirst: string = 'Log out';
  public textBtnSecond: string = 'Settings';
  userId: string | null = '';
  user: any;

  constructor(
    private auth: AuthService,
    private userService: userService,
    private router: Router,
    public notifier: NotifierService)
  { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user-id');
    this.userService.getUserById(this.userId).subscribe((response) => {
      this.user = response;
    })
  }

  userLogOut() {
    this.auth.logout();
    this.router.navigate(['/']);
    this.notifier.notify('warning', 'Вы вышли из учетной записи.')
  }

  userEdit() {
    this.router.navigate(['/edit-dashboard']);
  }
}
