import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from "angular-notifier";
import { SharedModule } from "./shared/shared.module";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";

import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './templates/home-layout/home-layout.component';
import { GeneralLayoutComponent } from './templates/general-layout/general-layout.component';
import { environment } from "../environments/environment";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";
import {StoreModule} from "@ngrx/store";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    GeneralLayoutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
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
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
