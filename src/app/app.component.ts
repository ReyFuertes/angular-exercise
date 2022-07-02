import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable, takeUntil } from 'rxjs';
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
  public previewMode: boolean = false;

  constructor(private router: Router, private store: Store<RootState>) {
    super();
  }

  ngOnInit(): void {
    this.store.pipe(select(isLoggedInSelector),
      takeUntil(this.$unsubscribe))
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });

    this.router.events
      .pipe(takeUntil(this.$unsubscribe),
        filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const inLoginPage = e.urlAfterRedirects.includes('login');
        if (inLoginPage && this.isLoggedIn === true && this.previewMode === false) {
          this.router.navigateByUrl('dashboard');
        } else {
          this.previewMode = false;
        }
      });
  }

  public gotoLoginPage(): void {
    this.previewMode = true;
    this.router.navigateByUrl('login');
  }

  public handRightToggleValue(event: boolean): void {
    this.rightToggleSideNav = event;
  }

  public handleLeftToggleValue(event: boolean): void {
    this.leftToggleSideNav = event;
  }
}
