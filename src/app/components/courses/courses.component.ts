import { Component } from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../common/course";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  constructor(private courseService : CourseService) {
    this.getCourseList();
  }

  getCourseList(): void{
    this.courseService.getCourseList().subscribe(
        {
          next: (res: Course[]) => {
            console.log(res);
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        }
    );
  }

}
