import { environment } from './../../../../environments/environment';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { GenericDestroyPageComponent } from '../../generics/destroy.generic';
import { RootState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})

export class TopNavComponent extends GenericDestroyPageComponent {
  @ViewChild('search') searchElement: ElementRef;
  @Output() valueEmitter: EventEmitter<boolean> = new EventEmitter();

  public imgPath: string = environment.imgPath;
  public showAppSearch: boolean = false;
  public toggleSideNav: boolean = true;

  constructor(private router: Router, private store: Store<RootState>) {
    super();
  }

  public onToggleSideNav(): void {
    this.toggleSideNav = !this.toggleSideNav;
    this.valueEmitter.emit(this.toggleSideNav);
  }

  public showSearch(): void {
    this.showAppSearch = !this.showAppSearch;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    });
  }
}
