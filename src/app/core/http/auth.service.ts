import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Token, Credentials } from '../models/auth';
import { environment } from '../../../environments/environment';
import { StorageService } from '../services';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth$ = new BehaviorSubject<boolean>(false);
  private domain = environment.apiUrl;
  private tokenKey = 'token';

  get auth$(): Observable<boolean> {
    return this.isAuth$.asObservable();
  }

  constructor(
    private http: HttpClient,
    private storageService: StorageService
    ) {}

  login(credentials: Credentials): Observable<Token> {
    const url = `${this.domain}/auth/signin`;
    return this.http.post<Token>(url, credentials);
  }

  getToken(): string {
    return this.storageService.getLocalStorageItem(this.tokenKey);
  }

  private setAuth(authenticated: boolean) {
    this.isAuth$.next(authenticated);
  }

  authenticatedUser() {
    this.setAuth(true);
  }

  unAuthenticatedUser() {
    this.setAuth(false);
  }

}
