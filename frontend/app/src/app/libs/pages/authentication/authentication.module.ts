import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import { AuthenticationFeatureModule } from '@components/pages';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AuthenticationPageRoutingModule,
    AuthenticationFeatureModule
  ],
  declarations: [AuthenticationPage]
})
export class AuthenticationPageModule {}
