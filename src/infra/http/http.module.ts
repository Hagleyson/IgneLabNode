import { Module } from '@nestjs/common';
import { NotificationsControllers } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/notifications.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsControllers],
  providers: [SendNotification],
})
export class HttpModule {}
