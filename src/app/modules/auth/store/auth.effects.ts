import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, catchError, switchMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { loginAction, loginFailedAction, loginSuccessAction } from './auth.actions';
import { NavigationEnd, Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  loginAction$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({ payload }) => of({})  //this.authService.post(payload, 'signin')
      .pipe(
        map((response: any) => {
          this.router.navigateByUrl('dashboard');
          return loginSuccessAction({ response });
        }),
        catchError((error: any) => {
          return of(loginFailedAction({ error: error.message }));
        })
      ))
  ));

  constructor(
    private actions$: Actions,
    private router: Router
  ) { }
}
