import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {NavigationExtras, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          switch (error.status) {
            case 400:
              // console.log(error)
              if (error.error.errors) {
                const modelStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modelStateErrors.push(error.error.errors[key]);
                  }
                }
                throw modelStateErrors.flat();
              } else if (error.error.message) {
                this.toastr.error(error.error.message, error.status.toString());
              } else {
                this.toastr.error(error.error, error.status.toString());
              }
              break;
            case 401:
              if (error.error.message) {
                this.toastr.error(error.error.message, error.status.toString());
              } else {
                this.toastr.error(error.error, error.status.toString());
              }
              break;
            case 404:
              this.router.navigateByUrl('/not-found').then(r => r);
              break;
            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}};
              this.router.navigateByUrl('/server-error', navigationExtras).then(r => r);
              break;
            default:
              this.toastr.error('Something unexpected went wrong');
              break;

          }
        }
        throw error;
      })
    );
  }
}
