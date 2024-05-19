import {Injectable} from '@angular/core';
import {Test, WeeklyTest} from "../models/Test";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private baseUrl = environment.baseUrl;  // Ensure you have baseUrl defined in your environment files

  constructor(private http: HttpClient) { }

  getWeeklyTests(): Observable<WeeklyTest[]> {
    const url = `${this.baseUrl}/dashboard/tests`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`});
    return this.http.get<WeeklyTest[]>(url, { headers });
  }

  getTestByWeek(week: number): Observable<Test> {
    const url = `${this.baseUrl}/dashboard/tests/` + week;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`});
    return this.http.get<Test>(url, { headers });
  }

  public getToken(): string {
    // Retrieve your token from wherever it is stored
    return localStorage.getItem('jwtToken') || '';
  }


  public getFirstname(): string {
    // Retrieve your token from wherever it is stored
    return localStorage.getItem('firstname') || '';
  }

  public getCourses(): number[] {
    const coursesString = localStorage.getItem('courses');
    if (!coursesString) return [];

    console.log(coursesString);
    try {
      const parsed = JSON.parse(`[${coursesString}]`);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [Number(coursesString)];
    }
  }


  submitTestAnswers(weekId: number, answers: { questionId: number, answer: string }[]): Observable<any> {
    const url = `${this.baseUrl}/dashboard/tests/${weekId}/submit`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    // Directly send the array, matching the expected format on the Spring side
    console.log("Submitting answers:", answers);
    return this.http.post(url, answers, { headers });
  }

  decrementAttempts(week: number): Observable<any>{
    const url = `${this.baseUrl}/dashboard/tests/${week}/decrementAttempts`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers });
  }

  getGrade(week: number): Observable<number>{
    const url = `${this.baseUrl}/dashboard/tests/${week}/getGrade`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<number>(url, { headers });
  }
}
