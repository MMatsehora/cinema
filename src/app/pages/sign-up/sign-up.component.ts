import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  public title: string = 'Registration';
  public textBtn: string = 'Sign Up'

  constructor() { }

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
    if (this.form.valid) {
      console.log('form submit: ', this.form);
      const formData = {...this.form.value};
      console.log(formData);
      this.form.reset();
    }
  }
}
