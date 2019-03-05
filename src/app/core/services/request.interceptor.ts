import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { baseUrl } from 'assets/config.json';
import { map } from 'rxjs/operators';
import { MBResponse } from 'models/MBResponse';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  baseUrl = baseUrl;

  constructor(private authService: AuthService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {};
    const token = this.authService.getToken();
    if (token) {
      headers['Authorization'] = token;
    }

    req = req.clone({
      url: baseUrl + req.url,
      setHeaders: headers
    });

    return next
      .handle(req) // enough for jwt
      /*.pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const body: MBResponse = event.body;
          body.success = body.status_code === 'MB2_0000';
        }
        return event;
      }));*/
  }

}
