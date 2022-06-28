import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardReducer } from './store/reducers/dashboard.reducer';
import { DashboardContainerComponent } from './container/dahboard-container.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: DashboardContainerComponent,
  children: [{
    path: '',
    component: DashboardPageComponent
  }]
}];

const materialModules = [
];

@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardPageComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    StoreModule.forFeature('dashboard', DashboardReducer),
    EffectsModule.forFeature([]),
    RouterModule.forChild(routes),
    SharedModule,
    materialModules
  ],
  exports: [],
  providers: [],
})
export class DashboardModule {}