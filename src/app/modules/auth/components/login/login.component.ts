import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GenericDestroyPageComponent } from 'src/app/shared/generics/destroy.generic';
import { RootState } from 'src/app/store/root.reducer';
import { environment } from 'src/environments/environment';
import { loginAction } from '../../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GenericDestroyPageComponent implements OnInit {
  public imgPath: string = environment.imgPath;
  public form: FormGroup;

  constructor(private router: Router, private store: Store<RootState>, private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      username: ['rfuertes@gmail.com', Validators.required],
      password: ['test123', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void { }

  public gotoRegister(): void {
    this.router.navigateByUrl('register');
  }

  public onLogin(): void {
    if(this.form.valid) {
      const { username, password } = this.form.value;
      this.store.dispatch(loginAction({
        payload: { username: String(username).toLowerCase(), password }
      }));
    }
  }
}
