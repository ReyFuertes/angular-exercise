import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { ICredential } from 'src/app/models/user.model';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService<ICredential> {
  constructor(http: HttpClient, storageSrv: StorageService) {
    super(http, 'auth', storageSrv);
  }
}