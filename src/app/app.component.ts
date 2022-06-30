import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Angular Exercise';
  public $notify: Observable<any>;
  public isLoggedIn: boolean = false;
  public svgPath: string = environment.svgPath;
  public hideTopNav: boolean = false;
  public leftToggleSideNav: boolean = true;
  public rightToggleSideNav: boolean = false;
  public items: string[] = ['Auth'];

  public handRightToggleValue(event: boolean): void {
    this.rightToggleSideNav = event;
  }

  public handleLeftToggleValue(event: boolean): void {
    this.leftToggleSideNav = event;
  }
  
}
