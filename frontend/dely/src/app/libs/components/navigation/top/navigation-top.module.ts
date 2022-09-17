import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { NavigationTopFeature } from './navigation-top.feature';
import { ToolBarDirective } from './navigation-top.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
  ],
  declarations: [
    NavigationTopFeature,
    ToolBarDirective
  ],
  exports: [
    NavigationTopFeature
  ]
})
export class NavigationTopModule {}
