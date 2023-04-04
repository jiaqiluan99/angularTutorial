import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIKeyAdderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const subscriptionKey = "9dd3ffa0b8254684903f4349e9902870";
    return next.handle(request.clone({
      headers: request.headers.set('Ocp-Apim-Subscription-Key', subscriptionKey)
    }));
  }
}
