import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() title: string = '';
  @Input() textBtn: string = '';
  @Input() isRegistration: boolean = false;
  @Input() disabled: boolean = false;
  @Output() onClicked = new EventEmitter<void>();

  form!: FormGroup;

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
      ]),
      ...(this.isRegistration ? {
        displayName: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ])
      } : {})
    })
  }

  onSubmitClick () {
    this.onClicked.emit(this.form.value);
  }
}
