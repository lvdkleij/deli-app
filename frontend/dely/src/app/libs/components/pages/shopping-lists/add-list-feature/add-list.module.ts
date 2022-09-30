import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationTopModule } from '@components/navigation';
import { SharedUiModule } from '@components/ui';
import { IonicModule } from '@ionic/angular';
import { AddListFeature } from './add-list.feature';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedUiModule,
    FormsModule,
    RouterModule,
    NavigationTopModule,
  ],
  exports: [AddListFeature],
  declarations: [AddListFeature]
})
export class AddListFeatureModule {}
