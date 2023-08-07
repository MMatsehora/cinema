import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data: any): void {
    const formData = {...data};
    console.log(formData);
    this.auth.signUp(formData).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/auth']);
    }, (error) => {
      const errorMessage = error.error.error.message;
      console.log(errorMessage);
    });
  }
}
