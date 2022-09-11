import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavigationTopModule } from '@components/navigation';
import { NavigationTopWithSearchbarComponent } from './with-searchbar.component';
import { SharedUiModule } from '@components/ui';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NavigationTopModule,
    SharedUiModule
  ],
  exports: [NavigationTopWithSearchbarComponent],
  declarations: [NavigationTopWithSearchbarComponent]
})
export class NavigationTopWithSearchbarComponentModule {}
