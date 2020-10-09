import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../http';

@Injectable()
  export class TokenInterceptor implements HttpInterceptor {

    constructor(
      private authService: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.authService.getToken()}` )
      });
      return next.handle(cloned);
    }
  }

