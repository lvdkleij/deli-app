import { Component, Input } from '@angular/core';
import { SideMenuItem } from './side-menu.interfaces';


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.feature.html',
  styleUrls: ['./side-menu.feature.scss']
})
export class SideMenuFeature {

  @Input() data: SideMenuItem[];

}
