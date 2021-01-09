import { Injectable } from '@nestjs/common';

export interface Students {
  studentId: number;
  studentName: string;
  courses: string[];
}

export enum courseEnum {
  AngularTraining = 'Angular Training',
  NestTraining = 'Nest Training',
  rxjsTraining = 'Rxjs Training',
  dockerTraining = 'Docker Training',
  KubernetesTraining = 'Kubernetes Training',
}

@Injectable()
export class AppService {
  public studentsList: Students[] = [
    {
      studentId: 1,
      studentName: 'Akash',
      courses: [courseEnum.AngularTraining, courseEnum.NestTraining],
    },
    {
      studentId: 2,
      studentName: 'Abilash',
      courses: [courseEnum.NestTraining, courseEnum.dockerTraining],
    },
    {
      studentId: 3,
      studentName: 'Dinesh',
      courses: [courseEnum.dockerTraining, courseEnum.NestTraining],
    },
    {
      studentId: 4,
      studentName: 'Prasad',
      courses: [courseEnum.AngularTraining, courseEnum.KubernetesTraining],
    },
  ];

  getData(): Students[] {
    return this.studentsList;
  }

  update(student: Students) {
    const index = this.studentsList.findIndex(
      (s: Students) => s.studentId === student.studentId
    );
    if (-1 === index) {
      this.studentsList = [...this.studentsList, student];
    } else {
      this.studentsList = [
        ...this.studentsList.slice(0, index),
        student,
        ...this.studentsList.slice(index + 1),
      ];
    }
    return this.studentsList;
  }

  getCourses() {
    return Object.values(courseEnum);
  }
}
