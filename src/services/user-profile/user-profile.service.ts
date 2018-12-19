import { Injectable } from '@angular/core';
// import { UserProfile } from '../../constants/app-settings.constant'
import { User } from '../../models/User'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Interface
import { IUserProfileService } from "../../interfaces/user-profile/user-profile.interface";


@Injectable({
  providedIn: 'root'
})
export class UserProfileService implements IUserProfileService{
  
  
  constructor(private httpClient: HttpClient) { }

  getProfile(userId: number) :Observable<User>{
    let apiURL = "http://5c03ec37d5f2070013d58094.mockapi.io/api/users/" + userId;
    return this.httpClient.get<User>(apiURL);
  }

  updateProfile(user: User){
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let apiURL = "http://5c03ec37d5f2070013d58094.mockapi.io/api/users/" + user.userId;
    return this.httpClient.put(apiURL, user, {headers});
  }
}
