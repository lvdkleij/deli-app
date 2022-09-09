import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'pantry',
        loadChildren: () => import('./pantry/pantry.module').then( m => m.PantryPageModule)
      },
      {
        path: 'shopping-lists',
        loadChildren: () => import('./shopping-lists/shopping-lists.module').then( m => m.ShoppingListsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'shopping-lists',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
