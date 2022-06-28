import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private _ls = new SecureLS({ encodingType: 'rc4', encryptionSecret: environment.storageKey });
  constructor() { }

  public set(key: string, value: any, expired: number = 0) {
    this._ls.set(key, value);
  }

  public remove(key: string) {
    this._ls.remove(key);
  }

  public get(key: string) {
    return this._ls.get(key);
  }

  public clear() {
    this._ls.removeAll();
  }
}