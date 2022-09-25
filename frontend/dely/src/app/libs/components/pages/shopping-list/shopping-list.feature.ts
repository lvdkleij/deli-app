

import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { hideLeftPart, slideLeftAnim } from '../welcome/welcome.animations';

@Component({
  selector: 'shopping-list-feature',
  templateUrl: './shopping-list.feature.html',
  styleUrls: ['./shopping-list.feature.scss'],
  animations: [slideLeftAnim, hideLeftPart]
})
export class ShoppingListFeature {

  @Input() data: { title: string; products: any[] };

  isModalOpen = false;
  isIosApp = false;

  constructor(
    private readonly navCtrl: NavController,
  ) {}

}
