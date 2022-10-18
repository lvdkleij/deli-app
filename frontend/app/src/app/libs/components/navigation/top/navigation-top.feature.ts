

import { Component, Input } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'navigation-top',
  templateUrl: './navigation-top.feature.html',
  styleUrls: ['./navigation-top.feature.scss'],
})
export class NavigationTopFeature {

  isIosApp = false;

  constructor(
    private readonly platform: Platform
  ) {
    let isIos = false;
    let isApp = false;
    platform.platforms().forEach(x => {
      isIos = x === 'ios' ? true : isIos;
      isApp = x === 'capacitor' ? true : isApp;
    });

    this.isIosApp = isApp && isIos;
  }

}
