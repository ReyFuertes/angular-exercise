import { createReducer, on, Action } from "@ngrx/store";
import { IAccess, IRole } from "src/app/models/user.model";
import { loginSuccessAction } from "src/app/modules/auth/store/auth.actions";

export interface appState {
  isLoggedIn?: boolean,
  access?: IAccess[] | undefined,
  roles?: IRole[] | undefined,
  isLoginFailed?: boolean
}
export const initialState: appState = {
  isLoggedIn: undefined,
  access: undefined,
  roles: undefined
};
const appReducer = createReducer(
  initialState,
  on(loginSuccessAction, (state, action) => {
    return Object.assign({}, state, { isLoggedIn: true, isLoginFailed: null })
  }),
);
export function AppReducer(state: appState, action: Action) {
  return appReducer(state, action);
}