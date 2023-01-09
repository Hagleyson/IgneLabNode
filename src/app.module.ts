import { SMTPMailService } from './mail/smtp.mail.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MailService } from './mail/mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}