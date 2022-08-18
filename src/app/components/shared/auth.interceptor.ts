import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyaWQiOjEsInVzZXJwcm9maWxlaWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJzZXNzaW9uaWQiOiI1MiIsImFnZW5jeWlkIjoxLCJ1c2VycHJvZmlsZXBlcm1pc3Npb25zbGlzdCI6WyIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiXSwidXNlcnByb2ZpbGVhZG1pbnBlcm1pc3Npb25zbGlzdCI6WyI3IiwiOCIsIjEwIiwiMTEiLCIxMiJdLCJ1c2VycHJvZmlsZXdpZGdldHBlcm1pc3Npb25zbGlzdCI6WyIxIiwiMiIsIjMiLCI0IiwiOCJdLCJhbGFybXR5cGVzcGVybWlzc2lvbnNsaXN0IjpbIjEiLCIyIiwiMyJdLCJ1c2VycHJvZmlsZWFtZW5kcGVybWlzc2lvbnNsaXN0IjpbMSwyXSwiaXNzIjoiaHR0cDpcL1wvd3d3LmRhbmFpZGUuY29tLmFyIiwiaWF0IjoxNjEwNTQ5ODYzLCJuYmYiOjE2MTA1NDk4MDMsImV4cCI6MTYxMTE1NDY2M30.O4H9m6ecR4zijLQsFjOWoqDvpqmfz1jt1XHD6ZEHwmTkoEcfo9QNYbNFcR-MK9FPImw8LkCXnGS3RnUbs9OIS6asYYg5FK-MkM26c_UfvItYFdKtPTQOmU43yei0dT1d5NkQaYJf_wFvnVRq5bMbMfIHdaVKiF_Y2jBZ0SwSnU0';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.jwt}`,
      },
    });
    return next.handle(request);
  }
}
