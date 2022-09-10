import { Component, Input } from '@angular/core';
import { SideMenuItem } from '../side-menu.interfaces';
import { rotateAnimation } from './menu-item.animations';


@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.feature.html',
  styleUrls: ['./menu-item.feature.scss'],
  animations: [rotateAnimation]
})
export class MenuItemFeature {

  @Input() data: SideMenuItem;

  expand = false;

  onExpand() {
    this.expand = !this.expand;
  }
}
