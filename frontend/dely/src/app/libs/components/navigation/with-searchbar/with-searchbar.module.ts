import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavigationTopModule } from '@components/navigation';
import { NavigationTopWithSearchbarComponent } from './with-searchbar.component';
import { SharedUiModule } from '@components/ui';
import { WithSearchBarDirective } from './with-searchbar.directive';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NavigationTopModule,
    SharedUiModule
  ],
  exports: [NavigationTopWithSearchbarComponent],
  declarations: [NavigationTopWithSearchbarComponent, WithSearchBarDirective]
})
export class NavigationTopWithSearchbarComponentModule {}
