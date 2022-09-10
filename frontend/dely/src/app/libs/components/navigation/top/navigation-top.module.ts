import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchIngredientsModule } from '../../search-ingredients/search-ingredients.module';
import { SharedUiModule } from '../../ui/shared-ui.module';
import { NavigationTopFeature } from './navigation-top.feature';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    SearchIngredientsModule
  ],
  declarations: [
    NavigationTopFeature
  ],
  exports: [
    NavigationTopFeature
  ]
})
export class NavigationTopModule {}
