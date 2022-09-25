import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { ShoppingListFeature } from './shopping-list.feature';
import { SearchIngredientListModule } from '@components/lists';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    SearchIngredientListModule
  ],
  declarations: [
    ShoppingListFeature
  ],
  exports: [
    ShoppingListFeature
  ]
})
export class ShoppingListFeatureModule {}
