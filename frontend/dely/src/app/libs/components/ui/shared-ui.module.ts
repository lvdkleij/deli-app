import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Button2Component } from './buttons/button-2/button-2.component';
import { Button1Component } from './buttons/button1/button1.component';
import { ListBackgroundCardComponent } from './cards/list-background/list-background.component';
import { ShoppingListCardComponent } from './cards/shopping-list/shopping-list-card.component';
import { IngredientItemComponent } from './ingredients/ingredient-item/ingredient-item.component';
import { SearchBar1Component } from './searchbars/searchbar--1/searchbar--1.component';
import { SliderComponent } from './wizzard/nav/slider.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports: [
    Button1Component,
    SearchBar1Component,
    IngredientItemComponent,
    ShoppingListCardComponent,
    ListBackgroundCardComponent,
    Button2Component,
    SliderComponent
  ],
  declarations: [
    Button1Component,
    SearchBar1Component,
    IngredientItemComponent,
    ShoppingListCardComponent,
    ListBackgroundCardComponent,
    Button2Component,
    SliderComponent
  ],
  providers: []
})
export class SharedUiModule {}
