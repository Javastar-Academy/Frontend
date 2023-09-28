import { Component } from '@angular/core';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {


    constructor() {
    }

// Custom method to handle navigation
    navigateTo(route: string) {
        window.location.href = route;
    }
}
