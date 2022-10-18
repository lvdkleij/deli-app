import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { ShoppingListFeature } from './shopping-list.feature';
import { SearchIngredientListModule } from '@components/lists';
import { NavigationTopModule } from '@components/navigation';
import { SearchModalModule } from '@components/modals';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    SearchIngredientListModule,
    NavigationTopModule,
    SearchModalModule
  ],
  declarations: [
    ShoppingListFeature
  ],
  exports: [
    ShoppingListFeature
  ]
})
export class ShoppingListFeatureModule {}
