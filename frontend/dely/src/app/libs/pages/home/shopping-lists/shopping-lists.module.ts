import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListsPageRoutingModule } from './shopping-lists-routing.module';

import { ShoppingListsPage } from './shopping-lists.page';
import { NavigationTopModule } from '@components/navigation';
import { CreateShoppingListModalModule } from '@components/modals';
import { ShoppingListsComponentModule } from '@components/shopping-lists';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListsPageRoutingModule,
    NavigationTopModule,
    CreateShoppingListModalModule,
    ShoppingListsComponentModule
  ],
  declarations: [
    ShoppingListsPage
  ],
})
export class ShoppingListsPageModule {}
