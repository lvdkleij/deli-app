import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedUiModule } from '@components/ui';
import { NavigationTopModule } from '@components/navigation';
import { CreateShoppingListModal } from './create-shopping-list.modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SharedUiModule,
    NavigationTopModule
  ],
  exports: [
    CreateShoppingListModal
  ],
  declarations: [
    CreateShoppingListModal
  ]
})
export class CreateShoppingListModalModule {}
