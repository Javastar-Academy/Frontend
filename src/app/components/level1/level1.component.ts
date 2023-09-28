import {Component} from '@angular/core';

@Component({
    selector: 'app-level1',
    templateUrl: './level1.component.html',
    styleUrls: ['./level1.component.css']
})
export class Level1Component {
    constructor() {
    }

// Custom method to handle navigation
    navigateTo(route: string) {
        window.location.href = route;
    }
}
