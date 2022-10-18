import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../../guards/authentication/authentication.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'shopping-lists',
        children: [
          {
            path: '',
            loadChildren: () => import('./shopping-lists/shopping-lists.module').then( m => m.ShoppingListsPageModule)
          },
        ]
      },
      {
        path: 'shopping-lists/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./shopping-lists/shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
          },
        ]
      },
      {
        path: 'pantry',
        children: [
          {
            path: '',
            loadChildren: () => import('./pantry/pantry.module').then( m => m.PantryPageModule)
          },
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/app/shopping-lists',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/app/shopping-lists',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthenticationGuard
  ]
})
export class HomePageRoutingModule {}
