import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Injectable()
export class AuthEffect {
  // loginAction$ = createEffect(() => this.actions$.pipe(
  //   ofType(loginAction),
  //   switchMap(({ payload }) => this.authService.post(payload, 'signin')
  //     .pipe(
  //       map((response: any) => {
  //         return loginSuccessAction({ response });
  //       }),
  //       catchError((error: any) => {
  //         return of(loginFailedAction({ error: error.message }));
  //       }),
  //       tap(({ response }: any) => {
  //         this.storageSrv.set('at', JSON.stringify(response))
  //       }),
  //     ))
  // ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storageSrv: StorageService
  ) { }
}
