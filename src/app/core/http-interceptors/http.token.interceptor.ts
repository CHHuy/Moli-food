import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {JwtService} from '@core/services/jwt.service';
import {Observable} from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    const token = this.jwtService.getToken();

    if (token) {
      // headersConfig['Authorization'] = `Token ${token}`;
      headersConfig.Authorization = `Bearer ${token}`;
    }

    const request = req.clone({setHeaders: headersConfig});
    return next.handle(request);
  }
}
