import { createSelector } from '@ngrx/store';
import { AppState, StoreState } from './app.reducer';

export const selectApp = (state: StoreState) => state;

export const selectList = (listId: string) => createSelector(
  selectApp,
  (state: StoreState) => state.app.lists.length ? state.app.lists.filter((l) => l.name === listId)[0] : null
);

export const selectLists = createSelector(
  selectApp,
  (state: StoreState) => state.app.lists
);

export const selectLastListPath = createSelector(
  selectApp,
  (state: StoreState) => state.app.lastListPath
);
