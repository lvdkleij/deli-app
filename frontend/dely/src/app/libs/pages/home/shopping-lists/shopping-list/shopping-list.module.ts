import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';

import { ShoppingListPage } from './shopping-list.page';
import { ItemModalModule, SearchModalModule } from '@components/modals';
import { SharedUiModule } from '@components/ui';
import { SideMenuFeatureModule } from '@components/side-menu';
import { ListModule } from '@components/lists';
import { NavigationTopModule } from '@components/navigation';
import { ScrollTransmitterDirective } from '@directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
    ListModule,
    SideMenuFeatureModule,
    SharedUiModule,
    ItemModalModule,
    NavigationTopModule,
    SearchModalModule
  ],
  declarations: [
    ShoppingListPage,
    ScrollTransmitterDirective
  ]
})
export class ShoppingListPageModule {}
