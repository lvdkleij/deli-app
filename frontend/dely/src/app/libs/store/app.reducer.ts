

import { createReducer, on } from '@ngrx/store';
import { addShoppingList, lastListPathAction, setShoppingLists } from './app.actions';




export interface AppState {
  lists: any[];
  lastListPath: string;
}

const initialState: AppState = {
  lists: [],
  lastListPath: ''
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
  on(lastListPathAction, (state, { lastListPath }) => ({
    ...state,
    lastListPath
  }))
);

export interface StoreState {
  app: AppState;
}

export const appReducer = {
  app: _appReducer
};

