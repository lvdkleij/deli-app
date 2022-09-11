

import { createReducer, on } from '@ngrx/store';
import { addShoppingList, setActiveShoppingList, setProducts, setShoppingLists } from './app.actions';




export interface AppState {
  lists: any[];
  activeShoppingList: string;
  products: any[];
}

const initialState: AppState = {
  lists: [],
  activeShoppingList: '',
  products: []
};

const _appReducer = createReducer(
  initialState,
  on(setShoppingLists, (state, { lists }) => ({
    ...state,
    lists
  })),
  on(addShoppingList, (state, { list }) => ({
    ...state,
    lists: state.lists.concat([list])
  })),
  on(setActiveShoppingList, (state, { activeShoppingList }) => ({
    ...state,
    activeShoppingList
  })),
  on(setProducts, (state, { products }) => ({
    ...state,
    products
  }))
);

export interface StoreState {
  app: AppState;
}

export const appReducer = {
  app: _appReducer
};

