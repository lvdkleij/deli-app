import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { WelcomeTourPageRoutingModule } from './welcome-tour-routing.module';

import { WelcomeTourPage } from './welcome-tour.page';
import { WelcomeTourFeatureModule } from '@components/pages';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    WelcomeTourPageRoutingModule,
    WelcomeTourFeatureModule
  ],
  declarations: [WelcomeTourPage]
})
export class WelcomeTourPageModule {}
