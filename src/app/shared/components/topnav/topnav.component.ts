import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
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
  public imgPath: string = environment.imgPath;
  
  constructor(private router: Router, private store: Store<RootState>) {
    super();
  }
}
