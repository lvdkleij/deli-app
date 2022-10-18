import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '../../ui/shared-ui.module';
import { ListFeature } from './list.feature';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule
  ],
  declarations: [
    ListFeature
  ],
  exports: [
    ListFeature
  ]
})
export class ListModule {}
