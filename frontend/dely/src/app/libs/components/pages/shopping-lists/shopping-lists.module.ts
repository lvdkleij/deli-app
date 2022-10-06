import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationTopModule } from '@components/navigation';
import { ButtonComponentModule, MediaCardComponentModule, SharedUiModule } from '@components/ui';
import { IonicModule } from '@ionic/angular';
import { AddListFeatureModule } from './add-list-feature/add-list.module';
import { ShoppingListsComponent } from './shopping-lists.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedUiModule,
    RouterModule,
    NavigationTopModule,
    AddListFeatureModule,
    MediaCardComponentModule,
    ButtonComponentModule
  ],
  exports: [ShoppingListsComponent],
  declarations: [ShoppingListsComponent]
})
export class ShoppingListsComponentModule {}
