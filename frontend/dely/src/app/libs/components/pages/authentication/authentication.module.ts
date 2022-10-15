import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { AuthenticationFeature } from './authentication.feature';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthenticationFeature,
  ],
  exports: [
    AuthenticationFeature
  ]
})
export class AuthenticationFeatureModule {}
