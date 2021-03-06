import { environment } from './../../../../environments/environment';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { GenericDestroyPageComponent } from '../../generics/destroy.generic';
import { RootState } from 'src/app/store/root.reducer';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})

export class TopNavComponent extends GenericDestroyPageComponent {
  @ViewChild('search') searchElement: ElementRef;
  @Output() ToggleLeftSideNav: EventEmitter<boolean> = new EventEmitter();
  @Output() ToggleRightSideNav: EventEmitter<boolean> = new EventEmitter();

  public imgPath: string = environment.imgPath;
  public showAppSearch: boolean = false;
  public leftToggleSideNav: boolean = true;
  public rightToggleSideNav: boolean = false;

  constructor(private localStorageSrv: StorageService, private router: Router, private store: Store<RootState>) {
    super();
  }

  public get backgroundColor(): string {
    const bgColor = this.localStorageSrv.get('bgColor');
    if(bgColor) {
      return JSON.parse(bgColor);
    } else {
      return '#000048'
    }
  }

  public onRightToggleSideNav(): void {
    this.rightToggleSideNav = !this.rightToggleSideNav;
    this.ToggleRightSideNav.emit(this.rightToggleSideNav);
  }

  public onLeftToggleSideNav(): void {
    this.leftToggleSideNav = !this.leftToggleSideNav;
    this.ToggleLeftSideNav.emit(this.leftToggleSideNav);
  }

  public showSearch(): void {
    this.showAppSearch = !this.showAppSearch;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    });
  }
}
