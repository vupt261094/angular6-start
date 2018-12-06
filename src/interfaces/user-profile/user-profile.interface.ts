import { User } from "../../models/User";
import { Observable } from "rxjs/internal/Observable";

export interface IUserProfileService {
    //get profile
    getProfile(userId: number): Observable<User>;

    // update profile
    updateProfile(user: User);
}