import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from "./templates/home-layout/home-layout.component";
import { GeneralLayoutComponent } from "./templates/general-layout/general-layout.component";

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
      { path: 'view/:id', loadChildren: () => import('./pages/view/view.module').then(m => m.ViewModule) },
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
      { path: 'edit-dashboard', loadChildren: () => import('./pages/edit-dashboard/edit-dashboard.module').then(m => m.EditDashboardModule) }
    ]
  },
  { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
