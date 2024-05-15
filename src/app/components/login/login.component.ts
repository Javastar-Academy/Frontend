import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";
import {untagAllTsFiles} from "@angular/compiler-cli/src/ngtsc/shims";

@Component({
    selector: 'app-register',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userData = {
        username: '',
        password: '',
    };

    constructor(private loginService: LoginService, private router: Router) {
    }

    login() {
        this.loginService.authenticate(this.userData).subscribe(
            response => {
                const token = response.token; // Assuming the response object has a token property
                const decodedToken = jwtDecode<any>(token); // Use jwtDecode to parse the token
                const role = decodedToken.role;

                localStorage.setItem('jwtToken', token); // Save the token to local storage
                localStorage.setItem('"role"', role);   // Set user role to local storage

                if (role === 'ADMIN') {
                    this.router.navigate(['/admin-dashboard']);
                } else if (role === 'STUDENT') {
                    this.router.navigate(['/dashboard/home']);
                } else {
                    // Handle any other roles or default case here
                }
            },
            error => {
                console.log('Login failed');
                alert('Invalid credentials!');
            }
        );
        this.loginService.getUserAndSaveToLocalstorage();
    }
}
