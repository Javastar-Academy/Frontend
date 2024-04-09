
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NewsletterService {

    api = "http://46.101.203.100:8080"
     //api = "http://localhost:8080"

    constructor(private http: HttpClient) { }

    subscribeToNewsletter(email: string){
        return this.http.post(`${this.api}/newsletter/subscribe`, {email});
    }
}