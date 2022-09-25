

import { Component, Input, OnInit } from '@angular/core';
import { hideLeftPart } from '../welcome/welcome.animations';

@Component({
  selector: 'shopping-list-feature',
  templateUrl: './shopping-list.feature.html',
  styleUrls: ['./shopping-list.feature.scss'],
  animations: [hideLeftPart],
})
export class ShoppingListFeature implements OnInit {

  @Input() data: { title: string; productsData: { [key: string]: []} };

  showSearchModal = false;

  constructor(
  ) {}

  ngOnInit(): void {

  }
}
