import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Guild from '../db/models/Guild';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
