import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from 'src/application/entities/notifications';
import { NotificationsRepository } from 'src/application/repositories/notification-repostory';

@Injectable()
export class PrimaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    content,
    createdAt,
    readtAt,
    recipientId,
    category,
    id,
  }: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id,
        category,
        content: content.value,
        createdAt,
        readtAt,
        recipientId,
      },
    });
  }
}
