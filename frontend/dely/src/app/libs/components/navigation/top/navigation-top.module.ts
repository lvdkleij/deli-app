import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchIngredientsModule } from '@components/search-ingredients';
import { SharedUiModule } from '@components/ui';
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
