import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() textBtn: string = '';
  @Input() isEditProfile: boolean = false;
  @Input() isSignUp: boolean = false;
  @Input() isSignIn: boolean = false;
  @Input() disabled: boolean = false;
  @Input() user: any | null;
  @Output() onClicked = new EventEmitter<void>();

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      ...(this.isSignIn || this.isSignUp ? {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(14)
        ]),
      } : {}),
      ...(this.isSignUp || this.isEditProfile ? {
        firstName: new FormControl(this.user ? this.user.firstName : '', Validators.required),
        lastName: new FormControl(this.user ? this.user.lastName : '', Validators.required),
        displayName: new FormControl(this.user ? this.user.displayName : '', Validators.required)
      } : {}),
      ...(this.isEditProfile ? {
        textarea: new FormControl(this.user ? this.user.textarea : '', null)
      } : {})
    })
  }

  onSubmitClick () {
    this.onClicked.emit(this.form.value);
  }
}
