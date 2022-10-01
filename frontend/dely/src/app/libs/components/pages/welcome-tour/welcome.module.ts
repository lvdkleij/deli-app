import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { WelcomeTourFeature } from './welcome.feature';
import { TextComponent } from './components/text/text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
  ],
  declarations: [
    WelcomeTourFeature,
    TextComponent,
  ],
  exports: [
    WelcomeTourFeature
  ]
})
export class WelcomeTourFeatureModule {}
