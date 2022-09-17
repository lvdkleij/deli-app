

import { Component, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { OptionsClickListenerService } from './services/options.service';

@Component({
  selector: 'navigation-top',
  templateUrl: './navigation-top.feature.html',
  styleUrls: ['./navigation-top.feature.scss'],
})
export class NavigationTopFeature {

  @Input() data: { title?: string } = {};

  isIosApp = false;

  constructor(
    readonly optionsClickListener: OptionsClickListenerService,
    private readonly navCtrl: NavController,
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

  minMax(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  onShowMenu() {
    this.navCtrl.navigateBack('/shopping-lists');
  }

  onShowOptions() {
    this.optionsClickListener.emitChange();
  }
}
