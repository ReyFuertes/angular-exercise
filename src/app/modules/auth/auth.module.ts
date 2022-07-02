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
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterComponent } from './components/register/register.component';
import { AuthEffect } from './store/auth.effects';
import { AuthReducer } from './store/auth.reducers';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [{
  path: '',
  component: AuthContainerComponent,
  children: [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }]
}];

const materialModules = [
];

const components = [
  AuthContainerComponent,
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffect]),
    RouterModule.forChild(routes),
    SharedModule,
    ...materialModules
  ],
  exports: [...components],
  providers: [],
})
export class AuthModule { }