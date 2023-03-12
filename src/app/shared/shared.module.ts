import {NgModule} from "@angular/core";
import {LogoComponent} from "./ui/logo/logo.component";
import {MenuComponent} from "./ui/menu/menu.component";
import {TitleComponent} from "./ui/title/title.component";
import {ButtonComponent} from "./ui/button/button.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
 declarations: [
   ButtonComponent,
   LogoComponent,
   MenuComponent,
   TitleComponent
 ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LogoComponent,
    MenuComponent,
    TitleComponent
  ]
})

export class SharedModule {

}
