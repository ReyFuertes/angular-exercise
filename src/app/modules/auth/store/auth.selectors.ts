import { createSelector } from '@ngrx/store';
import { RootState } from 'src/app/store/root.reducer';

export const selectedState = (state: RootState) => state.auth;
export const getLoginErrorSelector = createSelector(
  selectedState,
  state => state?.loginError
);