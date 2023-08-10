import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from "angular-notifier";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './templates/home-layout/home-layout.component';
import { GeneralLayoutComponent } from './templates/general-layout/general-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    GeneralLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      },
      behaviour: {
        autoHide: 1500
      }
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
