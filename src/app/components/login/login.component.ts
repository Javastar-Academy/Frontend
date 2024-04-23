import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";

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
                const role = JSON.parse(JSON.stringify(jwtDecode(response.token))).role
                localStorage.setItem('userRole', role);   // Set user role to local storage
                if (role === 'ADMIN') {
                    this.router.navigate(['/admin-dashboard']);
                } else if (role === 'STUDENT') {
                    this.router.navigate(['/dashboard']);
                } else {
                    // Handle any other roles or default case here
                }
            },
            error => {
                console.log('Login failed');
                alert('Invalid credentials!');
            }
        );
    }
}
