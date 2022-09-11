import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsResolver } from '@resolvers';
import { ShoppingListGuard } from '@guards';

import { ShoppingListPage } from './shopping-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListPage,
    resolve: {
      listsResolver: ListsResolver
    },
    canActivate: [ShoppingListGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ShoppingListGuard]
})
export class ShoppingListPageRoutingModule {}
