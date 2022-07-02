import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericDestroyPageComponent } from 'src/app/shared/generics/destroy.generic';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends GenericDestroyPageComponent implements OnInit {
  public imgPath: string = environment.imgPath;
  public form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      username: ['rfuertes@gmail.com', Validators.required]
    });
  }

  ngOnInit(): void { }

  public onSubmit(): void {
    this.router.navigateByUrl('login');
  }

  public gotoLogin(): void {
    this.router.navigateByUrl('login');
  }
}
