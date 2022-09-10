import { createAction, props } from '@ngrx/store';

export const setShoppingLists = createAction(
  '[App] set shopping lists',
  props<{ lists: any[] }>()
);

export const addShoppingList = createAction(
  '[App] add shopping list',
  props<{ list: any }>()
);

export const lastListPathAction = createAction(
  '[App] get last list path',
  props<{ lastListPath: string }>()
);
