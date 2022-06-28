import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, takeUntil, filter, catchError } from 'rxjs/operators';
import { RootState } from '../root.reducer';
import { ActivationStart } from '@angular/router';

@Injectable()
export class AppEffects {
  // loadAllRolesAction$ = createEffect(() => this.actions$.pipe(
  //   ofType(loadAllRolesAction),
  //   switchMap(() => {
  //     return this.roleService.getAll().pipe(
  //       map((response: IRole[]) => {
  //         return loadAllRolesSuccessAction({ response });
  //       })
  //     )
  //   })
  // ));

  constructor(private store: Store<RootState>,
    private actions$: ActivationStart) { }
}
