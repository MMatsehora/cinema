import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {loginAction} from "../../store/actions/login.action";
import {LoginRequestInterface} from "../../types/loginRequest.interface";
import {AppStateInterface} from "../../../../shared/types/appState.interface";

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string = `Authorization`;
  public textBtn: string = 'Log in';

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit(): void {
  }

  userLogin(user: LoginRequestInterface): void {
    this.store.dispatch(loginAction(user));
  }
}
