import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public title: string = `Authorization`;
  public textBtn: string = 'Log in';

  constructor(
    private auth: AuthService,
    private router: Router,
    public notifier: NotifierService
  ) { }

  ngOnInit(): void {
  }

  userAuthorize(data: any): void {
    this.auth.signIn(data.email, data.password).subscribe((response) => {
      this.auth.setToken(response);
      this.router.navigate(['/dashboard']);
      this.notifier.notify('success', 'Вы вошли в учетную запись.');
    }, (error) => {
      const errorMessage = error.error.error.message;
      this.notifier.notify('error', errorMessage);
    })
  }
}
