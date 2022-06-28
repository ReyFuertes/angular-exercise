import { createReducer, on, Action } from "@ngrx/store";

export interface AuthState {
  loginError: any
}
export const initialState: AuthState = {
  loginError: null
};
const authReducer = createReducer(
  initialState
);
export function AuthReducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}