
import { ActionReducerMap } from '@ngrx/store';
import { AuthReducer, AuthState } from '../modules/auth/store/auth.reducers';
import { DashboardReducer, DashboardState } from '../modules/dashboard/store/reducers/dashboard.reducer';
import { AppReducer, appState } from './reducers/app.reducer';

export interface RootState {
  appState: appState | undefined,
  dashboard: DashboardState | undefined,
  auth: AuthState | undefined,
}
export const reducers: ActionReducerMap<RootState> = {
  appState: AppReducer,
  dashboard: DashboardReducer,
  auth: AuthReducer
};
