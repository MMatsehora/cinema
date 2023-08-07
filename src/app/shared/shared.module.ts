import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { LogoComponent } from "./components/ui/logo/logo.component";
import { MenuComponent } from "./components/ui/menu/menu.component";
import { TitleComponent } from "./components/ui/title/title.component";
import { ButtonComponent } from "./components/ui/button/button.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AsideComponent } from "./components/aside/aside.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MovieComponent } from "./components/movie/movie.component";

@NgModule({
 declarations: [
   ButtonComponent,
   LogoComponent,
   MenuComponent,
   TitleComponent,
   HeaderComponent,
   AsideComponent,
   MovieComponent,
   FooterComponent,
 ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    ButtonComponent,
    LogoComponent,
    MenuComponent,
    TitleComponent,
    HeaderComponent,
    AsideComponent,
    MovieComponent,
    FooterComponent
  ]
})

export class SharedModule {

}
