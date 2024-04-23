import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

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
        if (this.loginService.login(this.userData)) {
            this.router.navigate(['/dashboard']);
        } else {
            alert('Invalid credentials!');
        }
    }
