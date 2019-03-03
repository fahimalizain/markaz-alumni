import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { baseUrl } from 'assets/config.json';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  baseUrl = baseUrl;

  constructor(private authService: AuthService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: baseUrl + req.url
    });

    const token = this.authService.getToken();
    if (token) {
      req.headers.set('Authorization', token);
    }
    return next.handle(req);
  }

}
