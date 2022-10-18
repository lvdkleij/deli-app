import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { NavigationTopModule } from '@components/navigation';
import { ItemModal } from './item.modal';


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
    ItemModal
  ],
  declarations: [
    ItemModal
  ]
})
export class ItemModalModule {}
