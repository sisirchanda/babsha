import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  root() {
    return 'Babsha Backend Running';
  }

  @Get('health')
  health() {
    return { status: 'OK' };
  }
}