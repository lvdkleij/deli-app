import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiModule } from '@components/ui';
import { IonicModule } from '@ionic/angular';
import { ShoppingListsComponent } from './shopping-lists.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedUiModule
  ],
  exports: [ShoppingListsComponent],
  declarations: [ShoppingListsComponent]
})
export class ShoppingListsComponentModule {}
