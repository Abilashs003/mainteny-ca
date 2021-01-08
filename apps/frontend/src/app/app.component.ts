import { Component } from '@angular/core';
import { AppService } from './app.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'mainteny-ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  courses: string[];
  constructor(public appService: AppService) {}

  addCourse(student: any) {
    console.log(this.appService.courses);
    this.courses = this.courses.filter(
      (course) => !student.courses.includes(course)
    );
    console.log(this.courses);
  }
}
