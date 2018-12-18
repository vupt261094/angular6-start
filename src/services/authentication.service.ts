import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//Interface
import { IAuthenticationService } from '../interfaces/authentication.interface'
//model
import { LoginModel } from '../models/login'
import { AuthorizationToken } from '../models/authentication-token';
import { AppSettings } from '../constants/app-settings.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements IAuthenticationService {

  constructor(private httpClient: HttpClient, private appSetting: AppSettings) { }


  //login
  public login(user: LoginModel) {
    var data = {
      username: user.username,
      passwrd: user.password
    }
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let apiURL = "http://5c03ec37d5f2070013d58094.mockapi.io/api/authentication";
    return this.httpClient.post(apiURL, data, { headers });
  }

  /*
   * Store identity into local storage.
   * */
  public setAuthorization(identity: AuthorizationToken): void {
    localStorage.setItem(this.appSetting.identityStorage, JSON.stringify(identity));
  }

  /*
   * Remove identity from cache.
   * */
  public clearIdentity(): void {
    localStorage.removeItem(this.appSetting.identityStorage);
  }

  /*
  * Get authorization token from local storage.
  * */
  public getAuthorization(): AuthorizationToken {

    // Get authorization token from local storage.
    let authorizationToken = localStorage.getItem(this.appSetting.identityStorage);

    // Authorization is invalid.
    if (authorizationToken == null || authorizationToken.length < 1)
      return null;

    return <AuthorizationToken>JSON.parse(authorizationToken);
  };

  /*
  * Check whether authorization token is valid or not.
  * */
  public isValidToken(authorizationToken: AuthorizationToken): boolean {

    // Token is not valid.
    if (authorizationToken == null)
      return false;

    // Authorization token code is not valid.
    if (authorizationToken.accessToken == null || authorizationToken.accessToken.length < 1)
      return false;

    // // Authorization token has been expired.
    // if (authorizationToken.expire >= Date.now())
    //   return false;

    return true;
  };
}
