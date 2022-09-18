import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { NavigationTopModule } from '@components/navigation';
import { WithNavigationModal } from './with-navigation.modal';


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
    WithNavigationModal
  ],
  declarations: [
    WithNavigationModal
  ]
})
export class WithNavigationModule {}
