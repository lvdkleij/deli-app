import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantryPageRoutingModule } from './pantry-routing.module';

import { PantryPage } from './pantry.page';
import { PantryFeatureModule } from '@components/pages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantryPageRoutingModule,
    PantryFeatureModule
  ],
  declarations: [PantryPage]
})
export class PantryPageModule {}
