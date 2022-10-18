import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '../ui/shared-ui.module';
import { MenuItemFeature } from './menu-item/menu-item.feature';
import { SideMenuFeature } from './side-menu.feature';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule
  ],
  exports: [SideMenuFeature],
  declarations: [SideMenuFeature, MenuItemFeature]
})
export class SideMenuFeatureModule {}
