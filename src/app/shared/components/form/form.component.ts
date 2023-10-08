import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {userService} from "../../services/user.service";

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
  userId: string | null = '';
  selectedFile: string | null = null;
  photoUser: string | null = null;
  form!: FormGroup;

  constructor(private userService: userService) {
  }

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
    this.userId = localStorage.getItem('user-id');
  }

  onSubmitClick () {
    if (this.photoUser) {
      const formData = {...this.form.value, photoUser: this.photoUser}
      this.onClicked.emit(formData);
    } else {
      this.onClicked.emit(this.form.value);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedFile = e.target?.result as string;

        const filePath = `users/${this.userId}/` + file.name;
        this.userService.uploadFile(file, filePath).subscribe(() => {
          this.photoUser = `https://firebasestorage.googleapis.com/v0/b/${environment.firebaseConfig.storageBucket}/o/${encodeURIComponent(filePath)}?alt=media`;
        });
      };
      reader.readAsDataURL(file);
    }
  }
}
