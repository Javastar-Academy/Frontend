import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  constructor() {
  }

// Custom method to handle navigation
  navigateTo(route: string) {
    window.location.href = route;
  }

}
