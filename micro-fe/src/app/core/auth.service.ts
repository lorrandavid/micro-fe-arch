import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqToBeUsed = req;

    if (!!sessionStorage.getItem('userdata')) {
      reqToBeUsed = reqToBeUsed.clone({
        headers: reqToBeUsed.headers.set('X-Teste', 'microfe')
      });
    }

    return next.handle(reqToBeUsed);
  }
}
