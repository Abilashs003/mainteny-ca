import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app/app.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCourses() {
    return this.appService.getCourses();
  }
}
