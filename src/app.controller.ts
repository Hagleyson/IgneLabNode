import { MailService } from './mail/mail.service';
import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get('hello')
  getHello(): string {
    return this.mailService.sendEmail();
  }
}
