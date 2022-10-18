import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./libs/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'welcome-tour',
    loadChildren: () => import('./libs/pages/welcome-tour/welcome-tour.module').then( m => m.WelcomeTourPageModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./libs/pages/authentication/authentication.module').then( m => m.AuthenticationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
