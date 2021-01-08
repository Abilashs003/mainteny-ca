import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'mainteny-ca-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  @Input()
  student: any;

  coursesLeft: string[];

  constructor(public appService: AppService) {}

  ngOnInit(): void {}

  addCourses(courses: any) {
    console.log(courses);
    this.coursesLeft = this.appService.courses.filter(
      (course) => !courses.includes(course)
    );
  }

  addCourse(course: string) {
    console.log(course);
    if (this.student.courses.indexOf(course) === -1) {
      this.student.courses.push(course);
      this.appService.update(this.student).subscribe(
        (update) => {},
        (error) => {}
      );
    }
  }
}
