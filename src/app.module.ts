import { PrismaService } from './infra/prisma.service';
import { SMTPMailService } from './mail/smtp.mail.service';
import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';

import { MailService } from './mail/mail.service';
import { HttpModule } from './infra/http.module';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}
