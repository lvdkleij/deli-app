import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonListsPageComponent } from './icon-text/button1.component';
import { ButtonComponent } from './button.component';
import { FullWidthButtonComponent } from './full-width-button/full-width-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports: [
    ButtonComponent,
  ],
  declarations: [
    ButtonComponent,
    FullWidthButtonComponent,
    ButtonListsPageComponent
  ],
  providers: []
})
export class ButtonComponentModule {}
