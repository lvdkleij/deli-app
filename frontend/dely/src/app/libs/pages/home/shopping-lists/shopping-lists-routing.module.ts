import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsResolver } from '@resolvers';

import { ShoppingListsPage } from './shopping-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListsPage,
    resolve: {
      listsResolver: ListsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListsPageRoutingModule {}
