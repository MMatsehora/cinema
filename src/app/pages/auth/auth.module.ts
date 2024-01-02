import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormModule} from "../../shared/components/form/form.module";

import { LoginComponent } from "./components/login/login.component";
import {AuthGuard} from "../../shared/services/auth.guard";
import {SharedModule} from "../../shared/shared.module";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {AuthServices} from "./services/auth.services";
import {EffectsModule} from "@ngrx/effects";
import {SignUpEffect} from "./store/effects/signUp.effect";
import {NotificationEffect} from "./store/effects/notification.effect";
import {LoginEffect} from "./store/effects/login.effects";
import {GetCurrentUserEffect} from "./store/effects/getCurrentUser.effect";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
      { path: '', pathMatch: 'full', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    FormModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([SignUpEffect, LoginEffect, GetCurrentUserEffect, NotificationEffect])
  ],
  exports: [RouterModule],
  providers: [AuthServices]
})

export class AuthModule { }
