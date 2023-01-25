import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Controller('notifications')
export class NotificationsControllers {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return { notification };
  }
}
