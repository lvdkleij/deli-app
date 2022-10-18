import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-ingredient-list',
  templateUrl: './search-ingredient-list.feature.html',
  styleUrls: ['./search-ingredient-list.feature.scss']
})
export class SearchIngredientListFeature implements OnInit {

  @Output() product = new EventEmitter<string>();
  @Input() data: any[];

  lala = {};

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onClick(i: number) {
    if (i in this.lala) {
      this.lala[i] = !this.lala[i];
    } else {
      this.lala[i] = true;
    }
  }

  onProductClick(data) {}
}
