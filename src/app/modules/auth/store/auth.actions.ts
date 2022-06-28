import { createAction, props } from '@ngrx/store';
import { ICredential } from 'src/app/models/user.model';

export enum LoginActionTypes {
  loginAction = '[Auth] login',
  logoutAction = '[Auth] logout',
  logoutSuccessAction = '[Auth] logout (success)',
  loginSuccessAction = '[Auth] login (success)',
  loginFailedAction = '[Auth] login (failed)',
  isLoggingInAction = '[Auth] login (in progress)'
}
export const isLoggingInAction = createAction(
  LoginActionTypes.isLoggingInAction
);
export const loginFailedAction = createAction(
  LoginActionTypes.loginFailedAction,
  props<{ error: any }>()
);
export const logoutAction = createAction(
  LoginActionTypes.logoutAction,
);
export const logoutSuccessAction = createAction(
  LoginActionTypes.logoutSuccessAction,
);
export const loginAction = createAction(
  LoginActionTypes.loginAction,
  props<{ payload: ICredential }>()
);
export const loginSuccessAction = createAction(
  LoginActionTypes.loginSuccessAction,
  props<{ response: any }>()
);
