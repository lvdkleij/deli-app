import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationTopModule } from '@components/navigation';
import { SharedUiModule } from '@components/ui';
import { IonicModule } from '@ionic/angular';
import { ShoppingListsComponent } from './shopping-lists.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedUiModule,
    RouterModule,
    NavigationTopModule,
  ],
  exports: [ShoppingListsComponent],
  declarations: [ShoppingListsComponent]
})
export class ShoppingListsComponentModule {}
