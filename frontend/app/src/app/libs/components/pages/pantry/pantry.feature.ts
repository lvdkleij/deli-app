

import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'pantry-feature',
  templateUrl: './pantry.feature.html',
  styleUrls: ['./pantry.feature.scss'],
})
export class PantryFeature {

  @Input() data: { title?: string } = {};

  isIosApp = false;

  constructor(
    private readonly navCtrl: NavController,
  ) {
  }

}
