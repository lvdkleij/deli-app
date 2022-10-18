

import { Component, Input, OnInit } from '@angular/core';
import { slideInFromTop } from '@animations';

@Component({
  selector: 'shopping-list-feature',
  templateUrl: './shopping-list.feature.html',
  styleUrls: ['./shopping-list.feature.scss'],
  animations: [slideInFromTop],
})
export class ShoppingListFeature implements OnInit {

  @Input() data: any;

  showSearchModal = false;

  constructor(
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
