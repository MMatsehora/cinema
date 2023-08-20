import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { userService } from "../../shared/services/user.service";

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
    private notifier: NotifierService,
    private userService: userService
  ) { }

  ngOnInit(): void {
  }

  userRegister(data: any): void {
    this.auth.signUpAndSignIn(data).subscribe((responses) => {
      this.auth.setToken(responses.signUpResponse);
      this.userService.createUserInRealtimeDatabase(responses.signUpResponse.localId, data).subscribe(
        () => {
        this.router.navigate(['/dashboard']);
        this.notifier.notify('success', 'Вы вошли в учетную запись.');
      })
    }, (error) => {
      const errorMessage = error.error.error.message;
      this.notifier.notify('error', errorMessage);
    });
  }
}
