import { createReducer, on, Action } from "@ngrx/store";
import { IAccess, IRole } from "src/app/models/user.model";

export interface appState {
  isLoggedIn?: boolean,
  access?: IAccess[] | undefined,
  roles?: IRole[] | undefined,
}
export const initialState: appState = {
  isLoggedIn: undefined,
  access: undefined,
  roles: undefined
};
const appReducer = createReducer(
  initialState,
  // on(loadAllRolesSuccessAction, (state, action) => {
  //   return Object.assign({}, state, { roles: action.response });
  // })
);
export function AppReducer(state: appState, action: Action) {
  return appReducer(state, action);
}