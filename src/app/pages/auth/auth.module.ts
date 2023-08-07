import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {FormModule} from "../../shared/components/form/form.module";

import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    FormModule,
    RouterModule.forChild([
      {
        path: '', component: AuthComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class AuthModule { }
