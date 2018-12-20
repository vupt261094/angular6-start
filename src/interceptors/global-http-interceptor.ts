import { Injectable, Inject } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    
    constructor(private toastr: ToastrService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*
        * Throw errors when APIs return
        * */
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                let errorMessage = '';

                if (err.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${err.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
                }
                this.toastr.error(errorMessage);
                return throwError(errorMessage);
            })
        );

        // return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        //     debugger;
        // }, (err: any) => {
        //     if(err instanceof HttpErrorResponse){
        //         switch(err.status){
        //             case 404:
        //                 alert("404 Not Found");
        //                 break;
        //             case 403:
        //                 alert("403 Forbidden");
        //                 break;
        //             case 405:
        //                 alert("405 Method Not Allowed");
        //                 break;
        //             case 500:
        //                 alert("500 Internal Server Error");
        //                 break;
        //         }
        //     }
        // }));
    }
}