import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface UserProfile {
    name: string;
    photoUrl: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    getUserProfile(): Observable<UserProfile> {
        //todo  replace with the endpoint you are using
        // Mocked UserProfile
        const mockedUserProfile: UserProfile = {
            name: 'Mock User',
            photoUrl: 'https://mock.url/mockuser.jpg'
        };
        return of(mockedUserProfile);
    }
}
