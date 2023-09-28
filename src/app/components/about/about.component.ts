import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../global.component.css']
})
export class AboutComponent {

  constructor() {}

  // Custom method to handle navigation
  navigateTo(route: string) {
    window.location.href = route;
  }

}
