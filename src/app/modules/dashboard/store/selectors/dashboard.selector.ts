import { createSelector } from '@ngrx/store';
import { RootState } from 'src/app/store/root.reducer';

export const selectedState = (state: RootState) => state.dashboard;
export const getMenuItemsSelector = createSelector(
  selectedState,
  state => state?.menuItems
);