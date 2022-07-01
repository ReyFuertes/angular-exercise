import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericDestroyPageComponent } from './shared/generics/destroy.generic';
import { RootState } from './store/root.reducer';
import { isLoggedInSelector } from './store/selectors/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends GenericDestroyPageComponent implements OnInit {
  public title: string = 'Angular Exercise';
  public $notify: Observable<any>;
  public isLoggedIn: boolean = false;
  public svgPath: string = environment.svgPath;
  public hideTopNav: boolean = false;
  public leftToggleSideNav: boolean = true;
  public rightToggleSideNav: boolean = false;
  public items: string[] = ['Auth'];

  constructor(private store: Store<RootState>) {
    super();
    // this.store.dispatch(initAppAction());
  }

  ngOnInit(): void {
    this.store.pipe(select(isLoggedInSelector),
      takeUntil(this.$unsubscribe))
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        console.log(this.isLoggedIn)
      });
  }

  public handRightToggleValue(event: boolean): void {
    this.rightToggleSideNav = event;
  }

  public handleLeftToggleValue(event: boolean): void {
    this.leftToggleSideNav = event;
  }
}
