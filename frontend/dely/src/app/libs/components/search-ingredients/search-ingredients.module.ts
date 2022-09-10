import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '../ui/shared-ui.module';
import { SearchIngredientsFeature } from './search-ingredients.feature';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule
  ],
  exports: [
    SearchIngredientsFeature
  ],
  declarations: [
    SearchIngredientsFeature
  ]
})
export class SearchIngredientsModule {}
