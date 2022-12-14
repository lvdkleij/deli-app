import { createAction, props } from '@ngrx/store';

export const setShoppingLists = createAction(
  '[App] set shopping lists',
  props<{ lists: any[] }>()
);

export const addShoppingList = createAction(
  '[App] add shopping list',
  props<{ list: any }>()
);

export const addProductToList = createAction(
  '[App] add product to shopping list',
  props<{ productToAdd: string }>()
);

export const setActiveShoppingList = createAction(
  '[App] set active shopping list',
  props<{ activeShoppingList: string }>()
);

export const setProducts = createAction(
  '[App] set products',
  props<{ products: any[]}>()
);

export const setUser = createAction(
  '[App] set user',
  props<{ user: any}>()
);

export const setHasSeenTour = createAction(
  '[App] has seen tour',
  props<{ hasSeenTour: any}>()
);
