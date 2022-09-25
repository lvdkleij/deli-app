

import { createReducer, on } from '@ngrx/store';
import { addShoppingList, setActiveShoppingList, setProducts, setShoppingLists, setSkipWelcomePage } from './app.actions';


export interface AppState {
  lists: any[];
  activeShoppingList: string;
  products: any[];
  skipWelcomePage: boolean;
}

const initialState: AppState = {
  lists: [],
  activeShoppingList: '',
  products: [],
  skipWelcomePage: false
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
  })),
  on(setSkipWelcomePage, (state, { _skipWelcomePage }) => ({
    ...state,
    skipWelcomePage: _skipWelcomePage
  }))
);

export interface StoreState {
  app: AppState;
}

export const appReducer = {
  app: _appReducer
};

