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
import { NavigationTopWithSearchbarComponentModule } from '@components/navigation';
import { HideMainHeaderDirective, HideSearchbarDirective, ScrollTransmitterDirective } from '@directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
    NavigationTopWithSearchbarComponentModule,
    ListModule,
    SideMenuFeatureModule,
    SharedUiModule,
    ItemModalModule,
    SearchModalModule
  ],
  declarations: [
    ShoppingListPage,
    HideMainHeaderDirective,
    HideSearchbarDirective,
    ScrollTransmitterDirective
  ]
})
export class ShoppingListPageModule {}
