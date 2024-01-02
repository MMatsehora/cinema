import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {signUpAction} from "../../store/actions/signUp.action";
import {SignUpRequestInterface} from "../../types/signUpRequest.interface";
import {AppStateInterface} from "../../../../shared/types/appState.interface";
import {getCurrentUserAction} from "../../store/actions/getCurrentUser.action";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public title: string = `Registration`;
  public textBtn: string = 'Sign Up';

  constructor(
    private store: Store<AppStateInterface>,
  ) { }

  ngOnInit(): void {

  }

  userRegister(user: SignUpRequestInterface): void {
    this.store.dispatch(signUpAction(user));
  }
}
