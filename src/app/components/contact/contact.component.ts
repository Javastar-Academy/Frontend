import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Custom method to handle navigation
  navigateTo(route: string) {
    window.location.href = route;
  }
}
