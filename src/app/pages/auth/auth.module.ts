import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormModule} from "../../shared/components/form/form.module";

import { LoginComponent } from "./components/login/login.component";
import {AuthGuard} from "../../shared/services/auth.guard";
import {SharedModule} from "../../shared/shared.module";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

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
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthModule { }
