import { createReducer, on, Action } from "@ngrx/store";
import { ISimpleItem } from "src/app/models/app.model";

export interface DashboardState {
  menuItems: ISimpleItem[] | undefined;
}
export const initialState: DashboardState = {
  menuItems: undefined
};
const dashboardReducer = createReducer(
  initialState
);
export function DashboardReducer(state: DashboardState, action: Action) {
  return dashboardReducer(state, action);
}