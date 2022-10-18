import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListCardComponent } from './list/list.component';
import { MediaCardComponent } from './media-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports: [
    MediaCardComponent
  ],
  declarations: [
    MediaCardComponent,
    ListCardComponent
  ],
  providers: []
})
export class MediaCardComponentModule {}
