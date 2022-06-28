import { createSelector } from '@ngrx/store';
import { RootState } from '../root.reducer';

export const selectedState = (state: RootState) => state.appState;
export const getUserRolesSelector = createSelector(
  selectedState,
  state => state?.roles
);
export const isLoggedInSelector = createSelector(
  selectedState,
  state => state?.isLoggedIn
);