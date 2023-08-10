import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public title: string = `Registration`;
  public textBtn: string = 'Sign Up';

  constructor(
    private auth: AuthService,
    private router: Router,
    private notifier: NotifierService
  ) { }

  ngOnInit(): void {
  }

  userRegister(data: any): void {
    const formData = {...data};
    console.log(formData);
    this.auth.signUp(formData).subscribe((response) => {
      console.log(response);
      this.auth.setToken(response);
      this.notifier.notify('success', 'Вы вошли в учетную запись.');
      this.router.navigate(['/dashboard']);
    }, (error) => {
      const errorMessage = error.error.error.message;
      this.notifier.notify('error', errorMessage);
    });
  }
}
