import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthContainerComponent } from './container/auth-container.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: '',
  component: AuthContainerComponent,
  children: [{
    path: '',
    component: LoginComponent
  }]
}];

const materialModules = [
];

@NgModule({
  declarations: [
    AuthContainerComponent,
    LoginComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    StoreModule.forFeature('auth', {}),
    EffectsModule.forFeature([]),
    RouterModule.forChild(routes),
    SharedModule,
    materialModules 
  ],
  exports: [],
  providers: [],
})
export class LoginModule {}