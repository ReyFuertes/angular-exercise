import { createAction, props } from '@ngrx/store';
import { ICredential } from 'src/app/models/user.model';

export enum LoginActionTypes {
  loginAction = '[Auth] login',
  loginSuccessAction = '[Auth] login (success)',
  loginFailedAction = '[Auth] login (failed)',
}
export const loginFailedAction = createAction(
  LoginActionTypes.loginFailedAction,
  props<{ error: any }>()
);
export const loginAction = createAction(
  LoginActionTypes.loginAction,
  props<{ payload: ICredential }>()
);
export const loginSuccessAction = createAction(
  LoginActionTypes.loginSuccessAction,
  props<{ response: any }>()
);
