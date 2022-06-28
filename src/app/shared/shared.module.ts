import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/topnav/topnav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const materialModules = [
  MatToolbarModule,
  MatIconModule
];

const components = [
  TopNavComponent,
  SidenavComponent
];
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    materialModules
  ],
  exports: [
    ...components
  ],
  providers: [],
})
export class SharedModule { }