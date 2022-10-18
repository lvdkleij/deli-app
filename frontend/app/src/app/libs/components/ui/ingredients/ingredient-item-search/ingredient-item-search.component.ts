import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'ingredient-item-search',
  templateUrl: './ingredient-item-search.component.html',
  styleUrls: ['./ingredient-item-search.component.scss']
})
export class IngredientItemSearchComponent {
  @Input() data: IngredientSearch;
  @Output() details = new EventEmitter();
}


export interface IngredientSearch {
  icon: string;
  name: string;
}
