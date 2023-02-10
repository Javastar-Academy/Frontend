import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../common/course";
import './curriculum.component.scss';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit{

  courses: Course[] = [];

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.listCourses();
  }

  private listCourses() {
    this.courseService.getCourseList().subscribe(
      data => {
        this.courses = data;
      }
    )
  }
}
