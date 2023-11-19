import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {UserAuth} from "../../../../shared/Model/auth";

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string = `Authorization`;
  public textBtn: string = 'Log in';

  constructor(
    private auth: AuthService,
    private router: Router,
    public notifier: NotifierService
  ) { }

  ngOnInit(): void {
  }

  userAuthorize(data: UserAuth): void {
    this.auth.signIn(data).subscribe((response) => {
      this.auth.setToken(response);
      this.router.navigate(['/dashboard']);
      this.notifier.notify('success', 'Вы вошли в учетную запись.');
    }, (error) => {
      const errorMessage = error.error.error.message;
      this.notifier.notify('error', errorMessage);
    })
  }
}
