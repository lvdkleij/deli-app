import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IngredientItemSearchComponent } from '../../ui/ingredients/ingredient-item-search/ingredient-item-search.component';
import { SharedUiModule } from '../../ui/shared-ui.module';
import { SearchIngredientListFeature } from './search-ingredient-list.feature';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule
  ],
  declarations: [
    SearchIngredientListFeature,
    IngredientItemSearchComponent
  ],
  exports: [
    SearchIngredientListFeature,
  ]
})
export class SearchIngredientListModule {}
