import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { SearchIngredientListModule } from '@components/lists';
import { SearchModal } from './search.modal';
import { NavigationTopModule } from '@components/navigation';
import { WithNavigationModule } from '../with-navigation';
import { WithoutNavigationModalModule } from '../without-navigation';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    SearchIngredientListModule,
    NavigationTopModule,
  ],
  exports: [
    SearchModal
  ],
  declarations: [
    SearchModal
  ]
})
export class SearchModalModule {}
