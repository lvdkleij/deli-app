import { createSelector } from '@ngrx/store';
import { StoreState } from './app.reducer';

export const selectApp = (state: StoreState) => state;

export const selectList = (listId: string) => createSelector(
  selectApp,
  (state: StoreState) => state.app.lists.length ? state.app.lists.filter((l) => l.name === listId)[0] : null
);

export const selectLists = createSelector(
  selectApp,
  (state: StoreState) => state.app.lists
);

export const selectActiveShoppingList = createSelector(
  selectApp,
  (state: StoreState) => state.app.activeShoppingList
);

export const selectProducts = createSelector(
  selectApp,
  (state: StoreState) => state.app.products
);

export const selectUser = createSelector(
  selectApp,
  (state: StoreState) => state.app.user
);

export const selectHasSeenTour = createSelector(
  selectApp,
  (state: StoreState) => state.app.hasSeenTour
);

export const selectUserAuthenticationStatus = createSelector(
  selectUser,
  selectHasSeenTour,
  (user: any, hasSeenTour: boolean) => ({ user, hasSeenTour})
);
