import { Inject, Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { IAuthenticationService } from "../interfaces/authentication.interface";

@Injectable()

export class IsAuthorizedGuard implements CanActivate{
    constructor(@Inject("IAuthenticationService") private authenticationService: IAuthenticationService, private router: Router){

    }

    public canActivate(): boolean{
        let identity = this.authenticationService.getAuthorization();

        if(!this.authenticationService.isValidToken(identity)){
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    }
}