import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from "angular-notifier";
import { SharedModule } from "./shared/shared.module";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";

import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './templates/home-layout/home-layout.component';
import { GeneralLayoutComponent } from './templates/general-layout/general-layout.component';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    GeneralLayoutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
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
