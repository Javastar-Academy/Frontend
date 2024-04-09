import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    // Use the same API endpoint or adjust as necessary
    api = "http://46.101.203.100:8080"
     //api = "http://localhost:8080";

    constructor(private http: HttpClient) { }

    registerUser(userData: any) {
        return this.http.post(`${this.api}/students/register`, userData);
    }
}
