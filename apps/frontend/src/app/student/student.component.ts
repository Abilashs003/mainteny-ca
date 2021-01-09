import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
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

  courseLeftVisibility: boolean = false;

  addCourseLabel: string = 'Add Course';

  constructor(public appService: AppService) {}

  ngOnInit(): void {}

  showCourses(courses: any) {
    this.coursesLeft = this.appService.courses.filter(
      (course) => !courses.includes(course)
    );
    this.courseLeftVisibility = !this.courseLeftVisibility;
    this.addCourseLabel === 'Add Course'
      ? (this.addCourseLabel = 'Hide Course')
      : (this.addCourseLabel = 'Add Course');
  }

  addCourse(course: string, index: number) {
    console.log(course);
    if (this.student.courses.indexOf(course) === -1) {
      this.coursesLeft.splice(index, 1);
      this.student.courses.push(course);
      this.appService.update(this.student).subscribe(
        (update) => {},
        (error) => {}
      );
    }
  }
}
