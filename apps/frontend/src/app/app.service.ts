import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  updateStudent$: Observable<any>;
  getStudent$: Observable<any>;
  courses: any;
  constructor(private http: HttpClient) {
    this.fetch();
    this.getCourses();
  }

  fetch() {
    this.getStudent$ = this.http.get('http://localhost:3333/api/students');
  }

  update(student: any) {
    return this.http.put('http://localhost:3333/api/students', student);
  }

  getCourses() {
    this.http
      .get('http://localhost:3333/api/courses')
      .subscribe((courses$) => (this.courses = courses$));
  }
}
