import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
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
        redirectTo: 'shopping-lists',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'shopping-lists',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
