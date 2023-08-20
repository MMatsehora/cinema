import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {FormModule} from "../../shared/components/form/form.module";

import { AuthComponent } from "./auth.component";
import {AuthGuard} from "../../shared/services/auth.guard";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    FormModule,
    RouterModule.forChild([
      {
        path: '', component: AuthComponent, canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})

export class AuthModule { }
