import { Body, Controller, Get, Put } from '@nestjs/common';

import { AppService, Students } from './app.service';

@Controller('students')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Put()
  updateData(@Body() student: Students) {
    return this.appService.update(student);
  }
}
