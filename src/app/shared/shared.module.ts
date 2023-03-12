import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {LogoComponent} from "./components/ui/logo/logo.component";
import {MenuComponent} from "./components/ui/menu/menu.component";
import {TitleComponent} from "./components/ui/title/title.component";
import {ButtonComponent} from "./components/ui/button/button.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
 declarations: [
   ButtonComponent,
   LogoComponent,
   MenuComponent,
   TitleComponent,
   HeaderComponent
 ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LogoComponent,
    MenuComponent,
    TitleComponent,
    HeaderComponent,
    CommonModule
  ]
})

export class SharedModule {

}
