import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from "./templates/home-layout/home-layout.component";
import { GeneralLayoutComponent } from "./templates/general-layout/general-layout.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), pathMatch: "full" }
    ]
  },
  {
    path: '', component: GeneralLayoutComponent, children: [
      { path: 'afisha', loadChildren: () => import('./pages/afisha/afisha.module').then(m => m.AfishaModule) },
      { path: 'future', loadChildren: () => import('./pages/future/future.module').then(m => m.FutureModule) },
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
      { path: 'view/:id', loadChildren: () => import('./pages/view/view.module').then(m => m.ViewModule) }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
