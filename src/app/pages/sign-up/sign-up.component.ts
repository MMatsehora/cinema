import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  public title: string = `Registration`;
  public textBtn: string = 'Sign Up';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14)
      ])
    })
  }

  onSubmit() {
    const formData = {...this.form.value};
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
