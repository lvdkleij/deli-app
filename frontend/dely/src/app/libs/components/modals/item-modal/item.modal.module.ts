import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from 'src/app/libs/components/ui/shared-ui.module';
import { NavigationTopModule } from '../../navigation/top/navigation-top.module';
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
