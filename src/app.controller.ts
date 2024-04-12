import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/block")
  blocking(@Query('waittime') waittime: string) {
    return this.appService.blocking(parseInt(waittime));
  }

  @Get("/with-worker")
  async worker(@Query('waittime') waittime: string) {
    return this.appService.worker(parseInt(waittime));
  }
}
