import { AuthorizationToken } from '../models/authentication-token';
import { LoginModel } from '../models/login'

export interface IAuthenticationService{
    /*
    * Call login API
    * */
    login(loginModel: LoginModel)
    /*
    * Save identity into local storage.
    * */
    setAuthorization(identity: AuthorizationToken): void;

    /*
    * Get identity in local storage.
    * */
    getAuthorization(): AuthorizationToken;

    /*
    * Remove identity from cache.
    * */
    clearIdentity(): void;

    /*
    * Get authorization token from local storage.
    * */
    isValidToken(authorizationToken: AuthorizationToken): boolean;
}