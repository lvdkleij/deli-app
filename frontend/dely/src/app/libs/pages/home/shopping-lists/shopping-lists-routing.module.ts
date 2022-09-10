import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsResolver } from 'src/app/libs/resolvers/lists-resolver/lists-resolver.resolver';

import { ShoppingListsPage } from './shopping-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListsPage,
    resolve: {
      listsResolver: ListsResolver
    }
  },
  {
    path: ':id',
    loadChildren: () => import('./shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListsPageRoutingModule {}
