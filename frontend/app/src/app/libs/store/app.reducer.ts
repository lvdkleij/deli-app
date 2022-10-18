

import { createReducer, on } from '@ngrx/store';
import { addShoppingList, setActiveShoppingList, setHasSeenTour, setProducts, setShoppingLists, setUser } from './app.actions';


export interface AppState {
  lists: any[];
  activeShoppingList: string;
  products: any[];
  user: any;
  hasSeenTour: boolean;
}

const initialState: AppState = {
  lists: [],
  activeShoppingList: '',
  products: [],
  user: null,
  hasSeenTour: false,
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
  on(setUser, (state, { user }) => ({ ...state, user })),
  on(setHasSeenTour, (state, { hasSeenTour }) => ({ ...state, hasSeenTour }))
);

export interface StoreState {
  app: AppState;
}

export const appReducer = {
  app: _appReducer
};

