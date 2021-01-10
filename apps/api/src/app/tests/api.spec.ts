import { Test, TestingModule } from '@nestjs/testing';
import { exception } from 'console';
import { request } from 'http';
import { CoursesController } from '../../courses/courses.controller';
import { AppController } from '../app.controller';
import { AppService, Students } from '../app.service';

describe('AppService', () => {
  let app: TestingModule;
  let appservice: AppService;
  let Cuoursecontroller: CoursesController;

  const expectedResult: Students[] = [
    {
      courses: ['Angular Training', 'Nest Training'],
      studentId: 1,
      studentName: 'Akash',
    },
    {
      courses: ['Nest Training', 'Docker Training'],
      studentId: 2,
      studentName: 'Abilash',
    },
    {
      courses: ['Docker Training', 'Nest Training'],
      studentId: 3,
      studentName: 'Dinesh',
    },
    {
      courses: ['Angular Training', 'Kubernetes Training'],
      studentId: 4,
      studentName: 'Prasad',
    },
  ];

  const expectedResult1: Students[] = [
    {
      courses: ['Angular Training', 'Nest Training', 'Docker Training'],
      studentId: 1,
      studentName: 'Akash',
    },
    {
      courses: ['Nest Training', 'Docker Training'],
      studentId: 2,
      studentName: 'Abilash',
    },
    {
      courses: ['Docker Training', 'Nest Training'],
      studentId: 3,
      studentName: 'Dinesh',
    },
    {
      courses: ['Angular Training', 'Kubernetes Training'],
      studentId: 4,
      studentName: 'Prasad',
    },
  ];

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, CoursesController],
      providers: [AppService],
    }).compile();
  });

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appservice = app.get<AppService>(AppService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('students/getData', () => {
    it('should return "students List"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual(expectedResult);
    });
  });

  describe('students/putData', () => {
    it('should update course for first student', () => {
      const appController = app.get<AppController>(AppController);
      let service = app.get<AppService>(AppService);
      const student = {
        courses: [
          'Angular Training',
          'Nest Training',
          'Docker Training',
          'Rxjs Training',
        ],
        studentId: 1,
        studentName: 'Akash',
      };
      const output = jest.fn((student) => {
        appController.updateData(student);
      });
      expect(output).toBeTruthy();
      expect(service.studentsList[0].courses.length).toBe(2);
    });
  });
});
