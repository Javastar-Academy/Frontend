import {Component} from '@angular/core';
import {RegisterService} from "../../services/register.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    userData = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        username: '',
        email: '',
        description: '',
        password: '',
        agreed: false
    };

    constructor(private registerService: RegisterService) { }

    register() {
        if (this.userData.email && this.userData.password && this.userData.firstName) {
            this.registerService.registerUser(this.userData).subscribe({
                next: (response) => {
                    console.log('Registration successful', response);
                    // Implement your response handling, e.g., redirect or show a success message
                },
                error: (error) => {
                    console.log('Registration failed', error);
                    // Implement your error handling
                },
            });
        }
    }
}
