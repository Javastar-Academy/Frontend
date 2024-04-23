import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Course} from "../common/course";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.baseUrl + "/tova/allCourses";

  private courses: Course[];

  constructor(private httpClient: HttpClient) { }

  getCourseList(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl);
  }

}
