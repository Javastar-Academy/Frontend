import { Component, OnChanges } from '@angular/core';
import {NewsletterService} from "../../services/newsletter.service";


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnChanges{

  email: string;

  constructor(private newsletterService: NewsletterService) { }

  subscribe(){
    if (this.email){
      this.newsletterService.subscribeToNewsletter(this.email).subscribe({
        next: (response) => {
          console.log('Subscription successful', response);
        },
        error: (error) => {
          console.log('Subscription failed', error);
        },
      });
    }
  }

  ngOnChanges(): void {
    console.log(this.email);
  }
}
