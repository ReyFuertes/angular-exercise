import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, takeUntil, filter, catchError } from 'rxjs/operators';
import { ActivationStart } from '@angular/router';
import { RootState } from 'src/app/store/root.reducer';

@Injectable()
export class DashboardEffects {
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
