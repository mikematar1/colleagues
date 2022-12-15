import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}
  store(storageKey: string, value: any) {
    return this.storage.set(storageKey, value);
  }
  get(storageKey: string) {
    return this.storage.get(storageKey);
  }
  clear() {
    this.storage.clear();
  }
}
