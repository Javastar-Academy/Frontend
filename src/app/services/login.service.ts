import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    // Use the same API endpoint or adjust as necessary
    private loginUrl = environment.baseUrl + "/students/login";

    constructor(private http: HttpClient) {
    }

    login(userData: { password: string; username: string }) {
        console.log('trimitem asta ' + userData + ' la acest endpoint ' + this.loginUrl)
        return this.http.post(this.loginUrl, userData);
    }
}
