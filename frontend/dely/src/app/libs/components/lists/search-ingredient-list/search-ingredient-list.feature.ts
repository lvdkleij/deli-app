import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'search-ingredient-list',
  templateUrl: './search-ingredient-list.feature.html',
  styleUrls: ['./search-ingredient-list.feature.scss']
})
export class SearchIngredientListFeature {

  @Input() products: any[];
  @Output() product = new EventEmitter<string>();

  lala = {};

  onClick(i: number) {
    if (i in this.lala) {
      this.lala[i] = !this.lala[i];
    } else {
      this.lala[i] = true;
    }
  }

  onProductClick(data) {}
}
