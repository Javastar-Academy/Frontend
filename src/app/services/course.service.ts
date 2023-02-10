import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Course} from "../common/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseuRL = 'http://localhost:8080/tova/allCourses';
  private courses: Course[];

  constructor(private httpClient: HttpClient) {
  }


  getCourseList(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('http://localhost:8080/tova/allCourses');
  }

}
