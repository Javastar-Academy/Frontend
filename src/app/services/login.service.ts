import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    // Use the same API endpoint or adjust as necessary
    private loginUrl = environment.baseUrl + "/users/login";
    private isAuthenticated = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) {
        this.loadInitialAuthState();
    }

    private loadInitialAuthState() {
        const token = localStorage.getItem('userToken');
        this.isAuthenticated.next(!!token);
    }

    login(token: string): void {
        localStorage.setItem('userToken', token);
        this.isAuthenticated.next(true);
    }

    logout(): void {
        localStorage.removeItem('userToken');
        this.isAuthenticated.next(false);
    }

    isLoggedIn(): Observable<boolean> {
        return this.isAuthenticated.asObservable();
    }

    authenticate(userData: { password: string; username: string }) {
        return this.http.post<{ token: string }>(this.loginUrl, userData).pipe(
            tap(response => {
                localStorage.setItem('userToken', response.token);
                this.isAuthenticated.next(true);
            })
        );

    }

    getUserRole(): string | null {
        const item = localStorage.getItem('userRole');
        return item;
    }
}
