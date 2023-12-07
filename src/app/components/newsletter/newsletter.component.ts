import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnChanges {

  email: string;

  ngOnChanges(): void {
    console.log(this.email);
  }
}
