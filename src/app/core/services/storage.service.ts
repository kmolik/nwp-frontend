import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocalStorageItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  deleteLocalStorageItem(key: string): void {
    localStorage.removeItem(key);
  }

  getLocalStorageItem(key: string): string {
    return localStorage.getItem(key);
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}
