import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { RootState } from 'src/app/store/root.reducer';
import { isLoggedInSelector } from 'src/app/store/selectors/app.selector';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<RootState>, private router: Router) { }
  
  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(select(isLoggedInSelector))
      .pipe(
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            this.router.navigateByUrl('login');
          }
        })
      )
  }
}
