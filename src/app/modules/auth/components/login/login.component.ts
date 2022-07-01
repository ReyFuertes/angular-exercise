import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GenericDestroyPageComponent } from 'src/app/shared/generics/destroy.generic';
import { emailRegex } from 'src/app/shared/util/email';
import { RootState } from 'src/app/store/root.reducer';
import { environment } from 'src/environments/environment';

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
      username: [null, Validators.compose([Validators.required, Validators.pattern(emailRegex.email)])],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void { }
}
