import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';

import { ShoppingListPage } from './shopping-list.page';
import { SearchModalModule } from 'src/app/libs/components/modals/search-modal/search.modal.module';
import { ItemModalModule } from 'src/app/libs/components/modals/item-modal/item.modal.module';
import { SearchIngredientsModule } from 'src/app/libs/components/search-ingredients/search-ingredients.module';
import { SharedUiModule } from 'src/app/libs/components/ui/shared-ui.module';
import { SideMenuFeatureModule } from 'src/app/libs/components/side-menu/side-menu.feature.module';
import { ListModule } from 'src/app/libs/components/lists/list/list.feature.module';
import { NavigationTopModule } from 'src/app/libs/components/navigation/top/navigation-top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
    NavigationTopModule,
    ListModule,
    SideMenuFeatureModule,
    SharedUiModule,
    SearchIngredientsModule,
    ItemModalModule,
    SearchModalModule
  ],
  declarations: [ShoppingListPage]
})
export class ShoppingListPageModule {}
