import { Injectable, Inject } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IAuthenticationService } from '../interfaces/authentication.interface'
import { AppSettings } from '../constants/app-settings.constant';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(@Inject("IAuthenticationService") private authenticationService: IAuthenticationService, private appSetting: AppSettings, private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authenticationService.getAuthorization();
        
        // if(this.authenticationService.isValidToken(token)){
        //     alert("Het phien dang nhap");
        //     this.router.navigateByUrl("/login");
        // }


        /*
        * Clone the request to add the new header
        * */

        // if(this.authenticationService.isValidToken(token)){
        //     const authReq = req.clone({
        //         headers: req.headers.set('Authorization', 'Bearer ' + token)
        //     });
        //     return next.handle(authReq);
        // }else{
        //     return next.handle(req);
        // }
        return next.handle(req);
    }
}