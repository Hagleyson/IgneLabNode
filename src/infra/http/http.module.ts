import { UnreadNotification } from './../../application/use-cases/unred-notification';
import { ReadNotification } from './../../application/use-cases/read-notification';
import { CountRecipientNotification } from './../../application/use-cases/count-recipient-notification';
import { CancelNotification } from './../../application/use-cases/cancel-notification';
import { Module } from '@nestjs/common';
import { NotificationsControllers } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/notifications.module';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsControllers],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
