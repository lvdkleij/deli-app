import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Button1Component } from './buttons/button1/button1.component';
import { IngredientItemComponent } from './ingredients/ingredient-item/ingredient-item.component';
import { SearchBar1Component } from './searchbars/searchbar--1/searchbar--1.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports: [
    Button1Component,
    SearchBar1Component,
    IngredientItemComponent
  ],
  declarations: [
    Button1Component,
    SearchBar1Component,
    IngredientItemComponent
  ],
  providers: []
})
export class SharedUiModule {}
