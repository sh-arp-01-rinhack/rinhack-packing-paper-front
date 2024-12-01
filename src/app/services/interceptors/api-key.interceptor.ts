import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith(environment.templatesBaseUri)) {

    environment.dev ? console.warn('Intercepting templatesBackend call: ', environment.templatesBaseUri) : undefined

    const modifiedReq = req.clone({
      setHeaders: {
        'x-api-key': '123e4567-e89b-12d3-a456-426614174000'
      }
    });
    return next(modifiedReq)
  }

  return next(req)
}
