import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { NavigationTopModule } from '@components/navigation';
import { WithoutNavigationModal } from './without-navigation.modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    NavigationTopModule
  ],
  exports: [
    WithoutNavigationModal
  ],
  declarations: [
    WithoutNavigationModal
  ]
})
export class WithoutNavigationModalModule {}
