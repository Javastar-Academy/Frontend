import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  constructor() {}

// Custom method to handle navigation
  navigateTo(route: string) {
    window.location.href = route;
  }
}
