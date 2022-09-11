import { createAction, props } from '@ngrx/store';

export const setShoppingLists = createAction(
  '[App] set shopping lists',
  props<{ lists: any[] }>()
);

export const addShoppingList = createAction(
  '[App] add shopping list',
  props<{ list: any }>()
);

export const setActiveShoppingList = createAction(
  '[App] set active shopping list',
  props<{ activeShoppingList: string }>()
);

export const setProducts = createAction(
  '[App] set products',
  props<{ products: any[]}>()
);
