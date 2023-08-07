import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormModule} from "../../shared/components/form/form.module";

import {SignUpComponent} from "./sign-up.component";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    FormModule,
    RouterModule.forChild([
      {
        path: '', component: SignUpComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class SignUpModule { }
