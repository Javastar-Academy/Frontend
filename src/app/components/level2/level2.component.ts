import {Component} from '@angular/core';

@Component({
    selector: 'app-level1',
    templateUrl: './level2.component.html',
    styleUrls: ['./level2.component.css']
})
export class Level2Component {
    constructor() {
    }

// Custom method to handle navigation
    navigateTo(route: string) {
        window.location.href = route;
    }
}
