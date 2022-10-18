import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { UserProfileFeature } from './user-profile.feature';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
  ],
  declarations: [
    UserProfileFeature
  ],
  exports: [
    UserProfileFeature
  ]
})
export class UserProfileFeatureModule {}
