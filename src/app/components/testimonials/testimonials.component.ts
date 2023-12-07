import { Component, ViewChild } from '@angular/core';
import { Testimony } from 'src/app/models/Testimony';
import { Paginator } from 'primeng/paginator';
import {
  trigger,
  transition,
  state,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(600)])
    ])
  ]
})

export class TestimonialsComponent {

  data: Testimony[] = [
    {
        "id": 1,
        "createdAt": "2020-09-15T02:53:39.697Z",
        "name": "Popescu Alexandru",
        "url": "../../../assets/AvatarPopescu.png",
        "job": "Absolvent curs Java Incepator",
        "paragraph": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.",
        "job_field": "Interactions",
        "avatar": "../../../assets/AvatarPopescu.png",
        "company": "Runolfsdottir, Schneider and Tremblay"
    },
    {
      "id": 2,
      "createdAt": "2020-09-15T02:53:39.697Z",
      "name": "George Zaharia",
      "url": "../../../assets/AvatarPopescu.png",
      "job": "Absolvent curs Java Incepator",
      "paragraph": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.",
      "job_field": "Interactions",
      "avatar": "../../../assets/AvatarPopescu.png",
      "company": "Runolfsdottir, Schneider and Tremblay"
    },
    {
      "id": 3,
      "createdAt": "2020-09-15T02:53:39.697Z",
      "name": "Andrei Constantinescu",
      "url": "../../../assets/AvatarPopescu.png",
      "job": "Absolvent curs Java Incepator",
      "paragraph": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.",
      "job_field": "Interactions",
      "avatar": "../../../assets/AvatarPopescu.png",
      "company": "Runolfsdottir, Schneider and Tremblay"
    },
    {
      "id": 4,
      "createdAt": "2020-09-15T02:53:39.697Z",
      "name": "Polona Andreea",
      "url": "../../../assets/AvatarPopescu.png",
      "job": "Absolvent curs Java Incepator",
      "paragraph": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.",
      "job_field": "Interactions",
      "avatar": "../../../assets/AvatarPopescu.png",
      "company": "Runolfsdottir, Schneider and Tremblay"
    },
    {
      "id": 5,
      "createdAt": "2020-09-15T02:53:39.697Z",
      "name": "Raul Gomez",
      "url": "../../../assets/AvatarPopescu.png",
      "job": "Absolvent curs Java Incepator",
      "paragraph": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.",
      "job_field": "Interactions",
      "avatar": "../../../assets/AvatarPopescu.png",
      "company": "Runolfsdottir, Schneider and Tremblay"
    }
];

  current: Testimony;
  currentIndex: number = 0;
  @ViewChild('paginator', { static: true }) paginator: Paginator

  
  ngOnInit() {
    this.current = this.data[0];
  }

  switch(input: number) {
    if (input === 0 && this.currentIndex > 0) {
      this.current = this.data[this.currentIndex - 1];
      this.currentIndex--;
      this.paginator.changePage(this.currentIndex);
    }
    if (input === 1 && this.currentIndex < this.data.length - 1) {
      this.current = this.data[this.currentIndex + 1];
      this.currentIndex++;
      this.paginator.changePage(this.currentIndex);
    }
  }

   updateCurrentPage(currentPage: any): void {
    setTimeout(() => {
      this.paginator.changePage(currentPage);
      this.current = this.data[currentPage.page];
      this.currentIndex = currentPage.page;
    });
  }

}
