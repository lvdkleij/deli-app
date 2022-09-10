import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from 'src/app/libs/components/ui/shared-ui.module';
import { SearchIngredientListModule } from '../../lists/search-ingredient-list/search-ingredient-list.module';
import { SearchModal } from './search.modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    SearchIngredientListModule
  ],
  exports: [
    SearchModal
  ],
  declarations: [
    SearchModal
  ]
})
export class SearchModalModule {}
